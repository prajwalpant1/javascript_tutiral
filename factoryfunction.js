function createobject(){
    return{
        first_name:'john',
        last_name:'doe',
        full_name: function(){
            console.log(this.first_name + ' ' + this.last_name);
        }
    }
}

const prajwal = createobject();
prajwal.full_name();