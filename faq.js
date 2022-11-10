const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];
const faqs=document.querySelector(".accordian_body");
const header=document.querySelectorAll(".faq_header");

 faqData.forEach((faq) =>{
    let heading=document.createElement("div");
    heading.classList.add('faq');
    heading.innerHTML=`<button class="show_btn"><i class="fa-solid fa-plus"></i></button><h3 class="faq_header">${faq.question}</h3>
  <div>
    <p class="hidden">${faq.answer}</p></div>
    `
    faqs.appendChild(heading);
  
header.forEach(question =>{
  question.addEventListener("onClick", () =>{
    question.classList.toggle('active');
    const answer = question.nextElementSibling;
    if(question.classList.contains("active")){
      answer.nextElementSibling.maxHeight=answer.scrollHeight + "px";
    }
    else{
      answer.nextElementSibling.maxHeight = 0 +"px";
    }

  })
})
});
