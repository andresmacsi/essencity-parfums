// Script para manejar la selección de departamentos y ciudades de Colombia mediante API
document.addEventListener('DOMContentLoaded', function() {
    // Elementos select - Asegúrate que estos IDs coincidan con tu HTML
    const departmentSelect = document.getElementById('department');
    const citySelect = document.getElementById('city');
    
    // URL de la API con parámetros para asegurar obtener todos los datos
    // Usando limit y offset para obtener datos completos
    const apiUrl = 'https://www.datos.gov.co/resource/xdk5-pm3f.json?$limit=2000'; 
    
    // Variable para almacenar los datos de departamentos y municipios
    let locationData = [];
    
    // Objeto para datos estáticos (respaldo)
    const staticCities = {
        "Amazonas": ["Leticia", "Puerto Nariño"],
        "Antioquia": ["Medellín", "Bello", "Envigado", "Itagüí", "Rionegro"],
        "Arauca": ["Arauca", "Saravena", "Tame"],
        "Atlántico": ["Barranquilla", "Soledad", "Malambo"],
        "Bolívar": ["Cartagena", "Magangué", "El Carmen de Bolívar"],
        "Boyacá": ["Tunja", "Duitama", "Sogamoso", "Chiquinquirá"],
        "Caldas": ["Manizales", "La Dorada", "Chinchiná"],
        "Caquetá": ["Florencia", "San Vicente del Caguán"],
        "Casanare": ["Yopal", "Aguazul", "Villanueva"],
        "Cauca": ["Popayán", "Santander de Quilichao"],
        "Cesar": ["Valledupar", "Aguachica", "Agustín Codazzi"],
        "Chocó": ["Quibdó", "Istmina", "Tadó"],
        "Córdoba": ["Montería", "Lorica", "Cereté"],
        "Cundinamarca": ["Soacha", "Facatativá", "Zipaquirá", "Fusagasugá", "Chía"],
        "Guainía": ["Inírida"],
        "Guaviare": ["San José del Guaviare"],
        "Huila": ["Neiva", "Pitalito", "Garzón"],
        "La Guajira": ["Riohacha", "Maicao", "Uribia"],
        "Magdalena": ["Santa Marta", "Ciénaga", "Fundación"],
        "Meta": ["Villavicencio", "Acacías", "Granada"],
        "Nariño": ["Pasto", "Ipiales", "Tumaco"],
        "Norte de Santander": ["Cúcuta", "Ocaña", "Pamplona"],
        "Putumayo": ["Mocoa", "Puerto Asís", "Orito"],
        "Quindío": ["Armenia", "Calarcá", "Montenegro"],
        "Risaralda": ["Pereira", "Dosquebradas", "Santa Rosa de Cabal"],
        "San Andrés y Providencia": ["San Andrés", "Providencia"],
        "Santander": ["Bucaramanga", "Floridablanca", "Girón", "Piedecuesta"],
        "Sucre": ["Sincelejo", "Corozal", "Santiago de Tolú"],
        "Tolima": ["Ibagué", "Espinal", "Mariquita"],
        "Valle del Cauca": ["Cali", "Buenaventura", "Palmira", "Tuluá", "Buga"],
        "Vaupés": ["Mitú"],
        "Vichada": ["Puerto Carreño"],
        "Bogotá D.C.": ["Bogotá"]
    };
    
    // Función para cargar los departamentos
    async function loadDepartments() {
        try {
            // Mostrar mensaje de carga
            departmentSelect.innerHTML = '<option value="">Cargando departamentos...</option>';
            
            // Mejorar la URL para obtener datos más completos
            const apiUrl = 'https://www.datos.gov.co/resource/xdk5-pm3f.json?$limit=2000&$offset=0'; 
            
            // Obtener datos de la API
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Error al obtener datos de la API');
            }
            
            const data = await response.json();
            
            // Verificar si Cúcuta está incluida, si no, cargar más datos
            const cucutaExists = data.some(item => 
                item.departamento === "Norte de Santander" && 
                item.municipio === "Cúcuta"
            );
            
            if (!cucutaExists) {
                console.log("Cúcuta no encontrada en el primer conjunto de datos, cargando más...");
                const moreData = await fetch('https://www.datos.gov.co/resource/xdk5-pm3f.json?$limit=2000&$offset=2000');
                if (moreData.ok) {
                    const additionalData = await moreData.json();
                    locationData = [...data, ...additionalData];
                } else {
                    locationData = data;
                }
            } else {
                locationData = data;
            }
            
            // Asegurarse manualmente que Cúcuta esté en Norte de Santander
            const norteDeSantanderCities = staticCities["Norte de Santander"];
            if (!norteDeSantanderCities.includes("Cúcuta")) {
                staticCities["Norte de Santander"].push("Cúcuta");
                staticCities["Norte de Santander"].sort();
            }
            
            // Obtener departamentos únicos
            const departments = [...new Set(locationData.map(item => item.departamento))].sort();
            
            // Limpiar select de departamentos
            departmentSelect.innerHTML = '<option value="">Selecciona un departamento</option>';
            
            // Agregar departamentos al select
            departments.forEach(department => {
                const option = document.createElement('option');
                option.value = department;
                option.textContent = department;
                departmentSelect.appendChild(option);
            });
        } catch (error) {
            console.error('Error:', error);
            departmentSelect.innerHTML = '<option value="">Error al cargar departamentos</option>';
            
            // Si la API falla, cargar departamentos estáticos
            loadStaticDepartments();
        }
    }
    
    // Función de respaldo con datos estáticos en caso de que la API falle
    function loadStaticDepartments() {
        const departments = [
            "Amazonas", "Antioquia", "Arauca", "Atlántico", "Bolívar", "Boyacá", "Caldas", 
            "Caquetá", "Casanare", "Cauca", "Cesar", "Chocó", "Córdoba", "Cundinamarca", 
            "Guainía", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta", "Nariño", 
            "Norte de Santander", "Putumayo", "Quindío", "Risaralda", "San Andrés y Providencia", 
            "Santander", "Sucre", "Tolima", "Valle del Cauca", "Vaupés", "Vichada", "Bogotá D.C."
        ];
        
        departmentSelect.innerHTML = '<option value="">Selecciona un departamento</option>';
        
        departments.forEach(department => {
            const option = document.createElement('option');
            option.value = department;
            option.textContent = department;
            departmentSelect.appendChild(option);
        });
        
        // Agregar evento para usar datos estáticos
        departmentSelect.addEventListener('change', function() {
            loadStaticCities(this.value);
        });
    }
    
    // Función para cargar ciudades basada en el departamento seleccionado
    function loadCities(department) {
        // Mostrar mensaje de carga
        citySelect.innerHTML = '<option value="">Cargando ciudades...</option>';
        
        // Filtrar municipios por departamento
        const cities = locationData
            .filter(item => item.departamento === department)
            .map(item => item.municipio)
            .sort();
        
        // Limpiar select de ciudades
        citySelect.innerHTML = '<option value="">Selecciona una ciudad</option>';
        
        // Agregar ciudades al select
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    }
    
    // Función para cargar ciudades estáticas (respaldo)
    function loadStaticCities(department) {
        citySelect.innerHTML = '<option value="">Selecciona una ciudad</option>';
        
        if (department && staticCities[department]) {
            // Asegurarse que todas las ciudades importantes estén incluidas
            if (department === "Norte de Santander" && !staticCities[department].includes("Cúcuta")) {
                console.log("Añadiendo Cúcuta a las opciones");
                staticCities[department].push("Cúcuta");
                staticCities[department].sort(); // Reordenar alfabéticamente
            }
            
            staticCities[department].forEach(city => {
                const option = document.createElement('option');
                option.value = city;
                option.textContent = city;
                citySelect.appendChild(option);
            });
            
            // Para depuración
            console.log(`Departamento: ${department}, Ciudades cargadas: ${staticCities[department].length}`);
        }
    }
    
    // Evento para el cambio de departamento
    departmentSelect.addEventListener('change', function() {
        const selectedDepartment = this.value;
        
        if (!selectedDepartment) {
            citySelect.innerHTML = '<option value="">Selecciona primero un departamento</option>';
            return;
        }
        
        if (locationData.length > 0) {
            // Si tenemos datos de la API, usamos esos
            loadCities(selectedDepartment);
        } else {
            // Si no hay datos de API, usamos los estáticos
            loadStaticCities(selectedDepartment);
        }
    });
    
    // Inicializar cargando los departamentos
    loadDepartments();
});
