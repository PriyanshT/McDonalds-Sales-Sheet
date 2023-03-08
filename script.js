function changeVal() {
    var projectSales = document.getElementsByClassName('projectSales');
    var hrlySales = document.getElementsByClassName('hrlySales');
    var commSales = document.getElementsByClassName('commSales');
    var proj = document.getElementsByClassName('proj');
    var comm = document.getElementsByClassName('comm');
    var crewHrs = document.getElementsByClassName('crewHrs');
    var commHrs = document.getElementsByClassName('commHrs');
    var hrlySpmh = document.getElementsByClassName('hrlySpmh');
    var dailySpmh = document.getElementsByClassName('dailySpmh');

    commSales[0].value = hrlySales[0].value;
    commHrs[0].value = crewHrs[0].value;
    comm[0].value = proj[0].value;

    for (i = 0; i < projectSales.length; i++) {
        // to find the last values which were ignored by next loop
        proj[i].value = parseFloat(hrlySales[i].value) - parseFloat(projectSales[i].value);
        hrlySpmh[i].value = (parseFloat(hrlySales[i].value) / parseFloat(crewHrs[i].value)).toFixed(2);
        dailySpmh[i].value = (parseFloat(commSales[i].value) / parseFloat(commHrs[i].value)).toFixed(2);
    }

    for (i = 1; i < projectSales.length; i++) {
        commSales[i].value = parseFloat(commSales[i - 1].value) + parseFloat(hrlySales[i].value);
        proj[i - 1].value = parseFloat(hrlySales[i - 1].value) - parseFloat(projectSales[i - 1].value);
        comm[i].value = parseFloat(comm[i - 1].value) + parseFloat(proj[i].value);
        commHrs[i].value = parseFloat(commHrs[i - 1].value) + parseFloat(crewHrs[i].value);
        hrlySpmh[i - 1].value = (parseFloat(hrlySales[i - 1].value) / parseFloat(crewHrs[i - 1].value)).toFixed(2);
        dailySpmh[i - 1].value = (parseFloat(commSales[i - 1].value) / parseFloat(commHrs[i - 1].value)).toFixed(2);
    }
}