const object = {
    name: "aaa",
    surname: "bbb",
    getInfo: function() {
        console.log(this.name)
        console.log(this.surname);
    }
    // getInfo fonksiyonu arrow function olursa this.name ve this.surname undefined olur. onları görmez.
    // this'leri görebilmesi için arrow function olmamalı.
}

object.getInfo(); // aaa bbb

