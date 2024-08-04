'use client'
import { useEffect, useState } from 'react';

function ReadTime({ content }) {
  const [readingTime, setReadingTime] = useState(0);

  useEffect(() => {
    function getText(el) {
      let ret = '';
      const length = el.childNodes.length;
      for (let i = 0; i < length; i++) {
        const node = el.childNodes[i];
        if (node.nodeType !== 8) {
          ret += node.nodeType !== 1 ? node.nodeValue : getText(node);
        }
      }
      return ret;
    }

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    const words = getText(tempDiv);
    const count = words.split(' ').length;
    const avg = 200;
    const counted = count / avg;
    const maincount = Math.round(counted);
    setReadingTime(maincount);
  }, [content]);

  return (
    <bdi id="rdTime">{readingTime} min read</bdi>
  );
}

export default ReadTime;