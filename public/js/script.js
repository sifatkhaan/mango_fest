
// function showGateway(gatewayId) {
//     // Hide all gateways
//     document.getElementById('bkash').classList.add('hidden');
//     document.getElementById('rocket').classList.add('hidden');
//     document.getElementById('nagad').classList.add('hidden');

//     // Show the selected gateway
//     document.getElementById(gatewayId).classList.remove('hidden');
// }
// showGateway('bkash');

function showGateway(gatewayId) {

    console.log(gatewayId, 'id')
    const gateways = ['bkash', 'rocket', 'nagad'];

    gateways.forEach(id => {
        const gateway = document.getElementById(id);
        console.log( id, 'ud')
        if(gateway){
            if (id === gatewayId) {
                gateway.classList.remove('max-h-0', 'opacity-0');
                gateway.classList.add('max-h-screen', 'opacity-100');
            } else {
                gateway.classList.add('max-h-0', 'opacity-0');
                gateway.classList.remove('max-h-screen', 'opacity-100');
            }
        }else{
            console.warn(`Element with ID "${id}" not found`);

        }
       
    })
}
showGateway('bkash');

