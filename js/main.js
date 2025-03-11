async function process() {
    let r = await fetch("/data.json");
    let data = await r.json();

    data.forEach(item => {
        let rating = parseInt(item['Оцени работу преподавателя по шкале от 1-10 / 10 – высоко оцениваю работу преподавателя. 1 – совсем не понравилась работа преподавателя']);
        
        if (rating >= 1 && rating <= 8) {
            console.log("преподавателю есть над чем поработать");
        }
    });

    data.forEach(item => {
        let rating = parseInt(item['Оцени работу преподавателя по шкале от 1-10 / 10 – высоко оцениваю работу преподавателя. 1 – совсем не понравилась работа преподавателя']);
        
        if (rating >= 9 && rating <= 10) {
            console.log("препод огонь");
        }
    });
}

process();
