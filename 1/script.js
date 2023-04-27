$(()=>{
    $('.block_black').show().animate({
        height: '440px'        
    },60000)
    setTimeout(() => {
        $('h1').text('1')
    }, 60000);
    $('.block_black').animate({
        height: '0px'        
    },60000)
    setTimeout(() => {
        $('h1').text('0')
    }, 60000*2);    
})