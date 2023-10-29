describe('Open Application',() => {
    it('should open apps', async() => {
        await $('//android.widget.TextView[@resource-id="com.fghilmany.dietmealapp:id/header_welcome"]').click();
    })
})
describe('Submit User Form Data',() => {
    it('input field name: Novriana', async() => {
        await $('//*[@text="Name"]').setValue("Novriana");
    })
    it('input field weight: 50', async() => {
        await $('//*[@text="Weight"]').setValue(50);
    })
    it('input field height: 150', async() => {
        await $('//*[@text="Height"]').setValue(150);
    })
    it('click choose field gender: Female', async() => {
        await $('//*[@text="Female"]').click();
    })
    it('click button NEXT', async() => {
        await $('//android.widget.Button[@resource-id="com.fghilmany.dietmealapp:id/bt_next"]').click();
    })
})
describe('Submit User Form Data Page 2',() => {
    it('click choose field aktivitas sehari-hari', async() => {
        await $('//*[@text="Sekolah, Kuliah, Kerja Kantor, dsj."]').click();
    })
    it('click button SELESAI', async() => {
        await $('//*[@text="SELESAI"]').click();
    })
    it('validate home screen diet meal app', async() => {
        await expect($('//*[@text="Ready to some calories today?"]')).toHaveText("Ready to some calories today?");
    })
})
