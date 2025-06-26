// Script para manejar la selección de departamentos y ciudades de Colombia mediante API
document.addEventListener('DOMContentLoaded', function() {
    // Elementos select
    const departmentSelect = document.getElementById('department');
    const citySelect = document.getElementById('city');
    
    // URL de la API para obtener departamentos de Colombia
    const apiUrl = 'https://www.datos.gov.co/resource/xdk5-pm3f.json';
    
    // Variable para almacenar los datos de departamentos y municipios
    let locationData = [];
    
    // Función para cargar los departamentos
    async function loadDepartments() {
        try {
            // Mostrar mensaje de carga
            departmentSelect.innerHTML = '<option value="">Cargando departamentos...</option>';
            
            // Obtener datos de la API
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Error al obtener datos de la API');
            }
            
            const data = await response.json();
            locationData = data;
            
            // Obtener departamentos únicos
            const departments = [...new Set(data.map(item => item.departamento))].sort();
            
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
        
        citySelect.innerHTML = '<option value="">Selecciona una ciudad</option>';
        
        if (department && staticCities[department]) {
            staticCities[department].forEach(city => {
                const option = document.createElement('option');
                option.value = city;
                option.textContent = city;
                citySelect.appendChild(option);
            });
        }
    }
    
    // Solución para la función que carga las ciudades en app.js

    /**
     * Actualiza las opciones de ciudades basado en el departamento seleccionado
     * @param {string} departamento - El departamento seleccionado
     */
    function actualizarCiudades(departamento) {
        const ciudadSelect = document.getElementById('ciudad');
        ciudadSelect.innerHTML = '<option value="">Selecciona una ciudad</option>';
        
        // Verificar si el departamento existe en el objeto citiesData
        if (citiesData[departamento]) {
            // Ordenar las ciudades alfabéticamente para mejor usabilidad
            const ciudadesOrdenadas = [...citiesData[departamento]].sort();
            
            // Agregar cada ciudad como una opción
            ciudadesOrdenadas.forEach(ciudad => {
                const option = document.createElement('option');
                option.value = ciudad;
                option.textContent = ciudad;
                ciudadSelect.appendChild(option);
            });
            
            // Habilitar el selector de ciudades
            ciudadSelect.disabled = false;
        } else {
            // Si no hay ciudades, deshabilitar el selector
            ciudadSelect.disabled = true;
        }
        
        // Log para depuración
        console.log(`Departamento: ${departamento}, Ciudades cargadas: ${citiesData[departamento] ? citiesData[departamento].length : 0}`);
    }

    // Asegurarse que el evento change del selector de departamentos llama a esta función
    departmentSelect.addEventListener('change', function() {
        actualizarCiudades(this.value);
    });
    
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
