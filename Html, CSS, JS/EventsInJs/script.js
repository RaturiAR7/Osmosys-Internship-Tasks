document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("button");
  ////One Approach
  // button.onclick = buttClickHandler;
  ///Add Event listener
  const buttonClickHandler = (event) => {
    // console.log(event);
    // event.target.disabled = true;
    alert("Button Click Handler");
  };
  //   button.addEventListener("click", buttonClickHandler);
  //   setTimeout(() => {
  //     /////Remove EventListener-> The function to be removed should not be an anonymous function as both the same function should be removed which was added and annonymous functions are different
  //     button.removeEventListener("click", buttonClickHandler);
  //   }, 5000);
  ////Also removing a bound function could not be removed as bind function create a new object as well
  //   button.addEventListener("click", buttonClickHandler.bind(this));
  //   button.removeEventListener("click", buttonClickHandler.bind(this));
  ////So to use bind with removeEventListener
  //   const fn = buttonClickHandler.bind(this);
  //   button.addEventListener("click", fn);
  //   setTimeout(() => {
  //     /////Remove EventListener-> The function to be removed should not be an anonymous function as both the same function should be removed which was added and annonymous functions are different
  //     button.removeEventListener("click", fn);
  //   }, 5000);

  //   button.addEventListener("mouseenter", (e) => {
  //     console.log(e);
  //   });
  //   window.addEventListener("scroll", (e) => {
  //     console.log(e);
  //   });

  ////Code function for infinite scrolling
  //   const infiniteScrolling = () => {
  //     let curElementNumber = 0;

  //     function scrollHandler() {
  //       const distanceToBottom = document.body.getBoundingClientRect().bottom;

  //       if (distanceToBottom < document.documentElement.clientHeight + 150) {
  //         const newDataElement = document.createElement("div");
  //         curElementNumber++;
  //         newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
  //         document.body.append(newDataElement);
  //       }
  //     }

  //     window.addEventListener("scroll", scrollHandler);
  //   };
  //   infiniteScrolling();

  /////preventDefault in form

  ////Bubbling and Capturing in events->ancestors event also triggers when children event triggers->event propagation
  const divEl = document.querySelector("div");
  const btn = document.querySelector("button");
  //   btn.addEventListener("click", () => {
  //     console.log("button clicked");
  //   }); ////The true parameter ensures that outer element event is triggered first
  //   divEl.addEventListener(
  //     "click",
  //     () => {
  //       console.log("Div clicked");
  //     },
  //     true ////Ensures that div element event is triggered first
  //   );
  ////To avoid event propogation
  //   btn.addEventListener("click", (event) => {
  //     event.stopPropagation();
  //     console.log("button clicked");
  //   }); ////The true parameter ensures that outer element event is triggered first
  //   divEl.addEventListener(
  //     "click",
  //     () => {
  //       console.log("Div clicked");
  //     }
  //     // true ////Ensures that div element event is triggered first
  //   );

  /////EVENT DELEGATION-> Event Delegation is basically a pattern
  // to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event
  //  listener to a parent element and call an event
  //  on a particular target using the .target property of the event object.
  //   document.querySelectorAll("li").forEach((element) => {
  //     element.addEventListener("click", () => {
  //       element.style.backgroundColor = "red";
  //     });
  //   });
  ////Instead of this we can use event delegation
  //   document.querySelector("ul").addEventListener("click", (event) => {
  //     event.target.style.backgroundColor = "red";
  //   });

  /////Drag And Drop
  function connectDrag() {
    document.querySelectorAll("li").forEach((element) => {
      element.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", element.innerText);
        event.dataTransfer.effectAllowed = "move";
      });
    });
  }
  connectDrag();
  function dropabble() {
    document.querySelectorAll("li").forEach((element) => {
      element.addEventListener("dragenter", (event) => {
        event.preventDefault();
        element.style.backgroundColor = "red";
      });
      element.addEventListener("dragover", (event) => {
        event.preventDefault();
      });
      element.addEventListener("dragleave", () => {
        element.style.backgroundColor = "green";
      });
      element.addEventListener("drop", (event) => {
        const liData = event.dataTransfer.getData("text/plain");
        event.target.style.display = "none";
        console.log(liData);
      });
    });
  }
  dropabble();
});
