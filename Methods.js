class Sample
{
    setMethod(browser){
        return browser;

    }
    
}
let sample_obj = new Sample();
let browser_name = sample_obj.setMethod('CH');
console.log(browser_name); 