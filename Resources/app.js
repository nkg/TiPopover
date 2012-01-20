var popover = require('popover').popover,
    tabGroup = Titanium.UI.createTabGroup(),
    pop;


//
// create base UI tab and root window
//
var win = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win
});

var button = Ti.UI.createButton({
    title: 'pop'
});
win.setLeftNavButton(button);

var table = Ti.UI.createTableView({
    data: [
        Ti.UI.createTableViewRow({title: 'Row 1'}),
        Ti.UI.createTableViewRow({title: 'Row 2'}),
        Ti.UI.createTableViewRow({title: 'Row 3'})
    ]
});
table.addEventListener('click', function(e) {
    alert('Table clicked');
    pop.close();
});

button.addEventListener('click', function() {
     pop = new popover({
        title: 'A Table',
        view: table
    });
    pop.open();
});

tabGroup.addTab(tab1);
tabGroup.open();
