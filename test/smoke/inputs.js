const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json');
describe('Inputs', function () {
    describe('Inputs are displayed', function () {
        it('TC-016 Name ', function () {
            browser.url('');
            const name = $(sel.name).isDisplayed();
            expect(name).toEqual(true);
        });
        it('TC-017 Gender (he)', function () {
            const gender = $$(sel.gender)[0].isDisplayed();
            expect(gender).toEqual(true);
        });
        it('TC-018 Gender (she)', function () {
            const gender = $$(sel.gender)[1].isDisplayed();
            expect(gender).toEqual(true);
        });
        it('TC-019 Gender (it)', function () {
            const gender = $$(sel.gender)[2].isDisplayed();
            expect(gender).toEqual(true);
        });
        it('TC-020 Age', function () {
            const label = $(sel.age).isDisplayed();
            expect(label).toEqual(true);
        });
        it('TC-021 Story', function () {
            const label = $(sel.story).isDisplayed();
            expect(label).toEqual(true);
        });
        it('TC-022 Create', function () {
            const label = $(sel.create).isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-023 Image', function () {
            const label = $(sel.image).isDisplayed();
            expect(label).toEqual(true);
        });
    });
    //describe placeholders are correct 7 tests
})