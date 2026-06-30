class BaseTest{
    setup(){
        console.log("Base: Open Browser");
    }
    tearDown(){
        console.log("Base: Close Browser");
    }
}
class UITest extends BaseTest{
    setup(){
        super.setup(); // UITest will help you to call your parent function. super() - Constrcutor, super.fname() - functions name
        console.log("UI: maximize window");
    }
 teardown() {
        console.log("UI: take screenshot");
        super.teardown();

    }
}
let test = new UITest();
test.setup();