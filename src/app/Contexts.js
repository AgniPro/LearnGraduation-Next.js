
export const api = process.env.NEXT_PUBLIC_SERVER_URL;
export const domain = process.env.NEXT_PUBLIC_URL;

export const date = (pdate, udate) => {
  var fdate, pubinfo;
  if (pdate && udate) {
    if (pdate.toString() === udate.toString()) {
      fdate = pdate;
      pubinfo = "Publish:";
    } else {
      fdate = udate;
      pubinfo = "Updated:";
    }
    var date = new Date(fdate);
    const timeDiff = new Date() - date;
    let dTime;
    let year='';
    if (timeDiff < 60000) {
      dTime = Math.floor(timeDiff / 1000) + " second ago"
    } else if (timeDiff < 3600000) {
      dTime = Math.floor(timeDiff / 60000) + " minutes ago"
    } else if (timeDiff < 86400000) {
      dTime = Math.floor(timeDiff / 3600000) + " hour ago"
    } else {
      const options = { month: 'short', day: 'numeric' };
      dTime = date.toLocaleDateString('en-US', options);
      year = date.getFullYear();
    }
    return { "pubinfo": pubinfo, "month":dTime, "year": year };
  } else {
    return { "pubinfo": 0, "month": 0, "year": 0 };
  }

};
