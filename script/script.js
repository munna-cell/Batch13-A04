let interviewList = [];
let rejectedList = [];

let Total = document.getElementById('Total');
let Interview = document.getElementById('Interview');
let Rejected = document.getElementById('Rejected');

const AvailableJobs = document.getElementById('available-jobs');
const InterviewJobs = document.getElementById('interview-jobs');
const RejectedJobs = document.getElementById('rejected-jobs');

const allCardSection = document.getElementById('all-cards');
const mainContainer = document.querySelector('main');

function calculateCount(){
    Total.innerText = allCardSection.children.length;
    Interview.innerText = interviewList.length;
    Rejected.innerText = rejectedList.length;
}

calculateCount();

function toggleStyle (id){
    AvailableJobs.classList.remove('bg-blue-800', 'text-white');
    InterviewJobs.classList.remove('bg-blue-800', 'text-white');
    RejectedJobs.classList.remove('bg-blue-800', 'text-white');

    AvailableJobs.classList.add('bg-white', 'text-gray-600');
    InterviewJobs.classList.add('bg-white', 'text-gray-600');
    RejectedJobs.classList.add('bg-white', 'text-gray-600');

    const selected = document.getElementById(id)

    selected.classList.remove('bg-white', 'text-gray-600')
    selected.classList.add('bg-blue-800', 'text-white')
}