function checkQuiz() {
  let correct = 0;
  for(i=1; i<=8; i++) {
  const quizNodeList = document.getElementsByName(`${i}`);

  quizNodeList.forEach((node) => {
    if(node.checked) {
      if(node.value == "true"){
        correct+=1;
      }
    }
})
}
  alert(correct + "개 맞았습니다!");
}