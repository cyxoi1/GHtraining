describe('test drop down',function (){
    it('should check drop down',function (){
        browser.url('https://www.amazon.com/Hanes-Sleeve-Beefy-T-Pocket-X-Large/dp/B01NBY5PSY/ref=sr_1_1?dchild=1&keywords=tshort&qid=1592270942&sr=8-1&th=1&psc=1')
        const select = "//span[@id='dropdown_selected_size_name']//span[@role='button']"
        $(select).click();
        const sizeDropDown= $$("//li[@tabindex = '0']");
        sizeDropDown.shift();
        sizeDropDown.forEach(el => expect(el.isClickable()).toEqual(true));
    });
    it(' should check all images for item', function (){
        const tshirts = "//img[@class='imgSwatch']";
        $$(tshirts).forEach(el=>el.click());
    });
});