
const prajwal = {
    name: 'Prajwal',
    last_name: 'pant',
    full_name: function () {
        console.log(this.name + ' ' + this.last_name);
    }
}
const bob={
    first_name:'Bob',
    last_name:'Smith',
    full_name: function(){
        console.log(this.first_name + ' ' + this.last_name);
    }
}

