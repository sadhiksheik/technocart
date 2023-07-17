Description – Create an API which would accept 3 parameters.

1. InvoiceDate.
2. Invoice Number.
3. Invoice Amount. Based on the Invoice date, it should be Categorized into
   respective financialyear. For a financial year, only 1 type of invoice number
   can be created. For e.g. o Invoice number 1 can be created for FY-2022 – 23
   only once, but I can also create Invoice number 1 for another financial year.
   o You have to store these details in the db (Mongodb Atlas). The logic to
   store the data would be as follows - o The Invoice date should not be greater
   than the invoice date ofprevious or next invoice number. E.g.  Invoice
   number 1 has invoice date 3

rd July 2022.

 Invoice number 3 has invoice date 5

th July 2022.

 So, when I put invoice number 2, it’s date should lie between 3rd July and 5th
July, such validation should be there at the backend.

o Also, a clean code, commented code is a plus, along withReadme.md for
documentation.

 Create an React application which would perform these operations from the
frontend. Create an intuitive UI (can use Material UI or any other UI if
required).  On the Invoice Dashboard, filters required o Based on financial
year o Search based on invoice number o Filter between dates (Note: All these
filters can be used with each other, so create the API accordingly)  You have
to create the end points such as

1. Enter new invoice details.
2. Update a specific invoice based on invoice number
3. Delete a specific invoice based on invoice number
4. Get all invoices stored in the db
5. Filter API

Upload your code to your github profile, make sure the repository is private and
access to be granted when and to whom accordingly.
