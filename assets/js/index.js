function calcularEdad(fecha){
    difMs = Date.now() - fecha;
    todayDate = new Date()
    ageYear = new Date(difMs);
    ageYear.setHours(ageYear.getHours() + 10);
    ageYear = Math.abs(ageYear.getUTCFullYear() - 1970);

    function ageMonth() {
        if (todayDate.getMonth() >= fecha.getMonth()) {
            if (todayDate.getDate() >= fecha.getDate()) {
                return todayDate.getMonth() - fecha.getMonth();
            } else {
                if ((todayDate.getMonth() - 1) >= fecha.getMonth()) {
                    return (todayDate.getMonth() - 1) - fecha.getMonth();
                } else {
                    return ((todayDate.getMonth() - 1) + 12) - fecha.getMonth();
                }
            }
        }
        result = 12 - (fecha.getMonth() - todayDate.getMonth());
        if (result >= 12) {
            ageYear += 1;
            return 0;
        }
        return result;
    };

    let ageMonthv = ageMonth();

    function ageDay() {
        if (todayDate.getDate() > fecha.getDate()) {
            return todayDate.getDate() - fecha.getDate();
        } else if (todayDate.getDate() == fecha.getDate()) {
            return todayDate.getDate() - fecha.getDate();
        } else {
            let calDate = new Date(fecha.getFullYear(), fecha.getMonth(), 0);
            return (todayDate.getDate() + calDate.getDate()) - fecha.getDate();
        }
    };

    document.getElementById('resultAño').innerHTML = ageYear
    document.getElementById('resultMes').innerHTML = ageMonthv
    document.getElementById('resultDia').innerHTML = ageDay()
}

function validateForm(form) {
    let error = false;
    let dia = form["dia"].value;
    let mes = form["mes"].value;
    let año = form["año"].value;
    if(!form["dia"].validity.valid){
        document.getElementById('error-dia').classList.remove('d-none');
        console.log("error en dia");
        error = error || true;
    }else{
        document.getElementById('error-dia').classList.add('d-none');
        error = error || false;
    }
    if(!form["mes"].validity.valid){
        document.getElementById('error-mes').classList.remove('d-none');
        console.log("error en mes");
        error = error || true;
    }else {
        document.getElementById('error-mes').classList.add('d-none');
        error = error || false;
    }
    if(!form["año"].validity.valid){
        document.getElementById('error-año').classList.remove('d-none');
        console.log("error en año");
        error = error || true;  
    }else {
        document.getElementById('error-año').classList.add('d-none');
        error = error || false;
    }
    console.log("error: " + error)
    if(error) {
        return false;
    }
    let fecha = new Date(año, mes - 1, dia);
    if(fecha.getTime() > Date()) {
        return false;
    }
    
    /* Llama a la función para calcular la edad y regresa falso para que no refresque la pagina */
    calcularEdad(fecha);
    return false;
}