
        document.querySelectorAll(".mfecha").forEach(fechita => fechita.addEventListener("change", e => {
                const identificador = e.target.getAttribute("id");
                console.log(identificador);
                let fecha = document.getElementById(identificador);
                let valorFecha = fecha.value;
                
                let fechaSinGuion = valorFecha.split('-');
                
                let fechaReversada = fechaSinGuion.reverse();
                
                let fechaFormateada = fechaReversada.join('/');


                switch (identificador) {
                        case "fecha":
                                document.getElementById("definitiva").value = fechaFormateada;
                                break;
                        case "fecha1":
                                document.getElementById("definitiva1").value = fechaFormateada;
                                break;
                
                        default:
                                break;
                }


        }))

    

