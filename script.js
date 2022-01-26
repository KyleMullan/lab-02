let clickCount = 0;

function incrementClickCount() {
  clickCount++;
    target.textContent = clickCount;
}

myTrigger.addEventListener('click', incrementClickCount);

//function testPage() {
//  console.log("Hello!!");
//}
