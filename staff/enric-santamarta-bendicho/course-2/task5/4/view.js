function renderMembersTable(members){ 
$.each(members, function (rows, item) {
    
    var rows = '' 
         + '<tr><td><b><a href={{openstates_url}}>{{name}}</a></b></td>' 
         + '<td>{{party}}</td><td>{{current_role.title}}</td></tr>' 

    $('.table').append(Mustache.render(rows, item));
}); }


