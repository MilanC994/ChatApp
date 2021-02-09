
const validateForm = fields => {
    let validForm = true
    fields.forEach(el => {
        let valid = false
        el.name !== 'retypePassword' ? 
         valid = el.validate({ val: el.value })
        : valid = el.validate({password: el.value, retypePassword: fields.filter(f => f.name == 'password')[0].value})
        if(valid !== true){
            validForm = false
        }
    })

    return validForm
}
export default validateForm