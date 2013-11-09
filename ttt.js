var boardArray =  [
['', '', ''],
['', '', ''],
['', '', '']];

var playerSymbol = ['X', 'O'];

var player = 0;

var app = {
    init: function () {
        
        //All the load events go here
        $('td').click(app.verifyMove);
        $('.reset').click(app.resetBoard);
        app.resetBoard();
    },
    
    resetBoard : function () {
        $('td').text('');
        player = 0;
        
    },
    
    
    verifyMove : function (ev) {
       
        var cellClicked = $(ev.target);
        
        if ( cellClicked.text() !== '' ){
            alert ("invalid move");
        }
        else { 
            cellClicked.text(playerSymbol[player]);
            player = player == 0 ? 1 : 0;
        }


    }
    
    
}