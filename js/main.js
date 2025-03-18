async function process() {
    let r = await fetch("/data.json");
    let data = await r.json();
    console.log(data)

    function fillSelect(key, selector) {
        let mappedData = data.map(item => item[key]);
        let uniqueValues = [...new Set(mappedData)];
        console.log(uniqueValues);

        let select = document.querySelector(selector);
        console.log(select);

        uniqueValues.forEach(item => {
            let option = document.createElement("option");
            option.value = item;
            option.text = item;
            select.add(option)
        });
    }

    // Для каждого выпадающего списка вызываем функцию
    fillSelect('Насколько курс был полезен?', "#selectPoleznost");
    fillSelect('Насколько доволен форматом обучения?', "#selectNaskolkoDovolen");
    fillSelect('Отметь, в какой мере ты удовлетворен курсом?', "#selectNaskolkoUdovletvoren");
}

process()
