const data="himmu"
const person={
    x:"himmu",
    greet:function(){
        console.log(`this is my ${this.x}`)
    }
}
person.greet();