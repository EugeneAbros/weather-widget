function activatePlacesSearch () {
    var input = document.getElementById('searchInput');
    var autocomplete = new google.maps.places.Autocomplete(input);
}

new Vue({
    el: '#weather-app',
    data: {
        cities: [
            { name: "London" },
            { name: "Kiev" }
        ]
    },
    methods: {
        addCity: function () {
            var input = document.getElementById("searchInput");
            if ( input.value !== '' ) {
                this.cities.push ({
                    name: input.value
                })
                input.value = '';
            }
        },
        removeCity: function (index) {
            this.cities.splice(index, 1);
        }
    }
});