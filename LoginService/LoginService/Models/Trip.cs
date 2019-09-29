using System;
using System.Collections.Generic;

namespace LoginService.Models
{
    public partial class Trip
    {
        public long Id { get; set; }
        public string Source { get; set; }
        public string Destination { get; set; }
        public long Employeeid { get; set; }
        public long Customerid { get; set; }
        public string Vehiclename { get; set; }
        public bool? Status { get; set; }

        public virtual Customer Customer { get; set; }
        public virtual Employee Employee { get; set; }
    }
}
