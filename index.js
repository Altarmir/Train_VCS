/ Test to see if the browser supports the HTML template element by checking
// for the presence of the template element's content attribute.
if ('content' in document.createElement('template')) {

    // Instantiate the table with the existing HTML tbody
    // and the row with the template
    var tbody = document.querySelector("tbody");
    var template = document.querySelector('#productrow');

    // Clone the new row and insert it into the table
    var clone = template.content.cloneNode(true);
    var td = clone.querySelectorAll("td");
    td[0].textContent = "1235646565";
    td[1].textContent = "Stuff";

    tbody.appendChild(clone);

    // Clone the new row and insert it into the table
    var clone2 = template.content.cloneNode(true);
    td = clone2.querySelectorAll("td");
    td[0].textContent = "0384928528";
    td[1].textContent = "Acme Kidney Beans 2";

    tbody.appendChild(clone2);

} else {
  // Find another way to add the rows to the table because 
  // the HTML template element is not supported.
}
