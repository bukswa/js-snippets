function exec() {
  const elem = document.createElement("button");

  elem.addEventListener("click", (e) => {
    console.log("button clicked");
  });
  const ev = new Event("click");
  elem.dispatchEvent(ev);
}

exec();
