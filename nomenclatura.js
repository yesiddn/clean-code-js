//> Nombres pronunciables y expresivos
// No recomendado
const yyyymmdstr = moment().format('YYYY/MM/DD');

// Recomendado
const currentDate = moment().format('YYYY/MM/DD');

//> Ausencia de información técnica en los nombres
// No recomendado
class AbstractUser {}

// Recomendado
class User {}

//> Establecer un lenguaje ubicuo (algo que está presente o se encuentra en todas partes)
// No recomendado
getUserInfo();
getClientData();
getCustomerRecord();

// Recomendado
getUser();

// indica claramente la acción que realiza la función, sin especificar detalles específicos sobre los datos subyacentes o la implementación interna.