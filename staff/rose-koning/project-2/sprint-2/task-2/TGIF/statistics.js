var republicans =  members.filter(function (member) {
    return (member.includes("R")).length;
  });
  var democrats =  members.filter(function (member) {
    return (member.includes("D")).length;
  });
  var Independents =  members.filter(function (member) {
    return (member.includes("I")).length;
  });