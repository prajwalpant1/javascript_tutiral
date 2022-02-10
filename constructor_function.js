function Persion(first_name, last_name,){
    this.first_name=first_name;
    this.last_name=last_name;
    this.full_name=function(){
        console.log(this.first_name + ' ' + this.last_name);
    }
}

prajwal=new Persion('Prajwal','Pant');
prajwal.full_name();