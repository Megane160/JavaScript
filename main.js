document.getElementById("show-element").onclick = function()
{
    var element = document.getElementById('to-show'); 
    if (element.className ==='hide'){
        element.className='show';
        document.getElementsById('body') [0].className='on';
        document.getElementById('show-element').className='active';
    }

        
    
}
