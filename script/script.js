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
const filterSection = document.getElementById('filtered-section')

function calculateCount(){
    Total.innerText = allCardSection.children.length;
    Interview.innerText = interviewList.length;
    Rejected.innerText = rejectedList.length;
}

calculateCount();

function toggleStyle(id){

     
    AvailableJobs.classList.remove('bg-blue-800', 'text-white');
    InterviewJobs.classList.remove('bg-blue-800', 'text-white');
    RejectedJobs.classList.remove('bg-blue-800', 'text-white');

    
    AvailableJobs.classList.add('bg-white', 'text-gray-600');
    InterviewJobs.classList.add('bg-white', 'text-gray-600');
    RejectedJobs.classList.add('bg-white', 'text-gray-600');

    const selected = document.getElementById(id);

   
    selected.classList.remove('bg-white', 'text-gray-600');
    selected.classList.add('bg-blue-800', 'text-white');

    if(id == 'interview-jobs'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
    }

    else if(id == 'available-jobs') {
        allCardSection.classList.remove('hidden')
        filterSection.classList.add('hidden')
    }
}

mainContainer.addEventListener('click', function(event){

    
    console.log(event.target.classList.contains('interview-btn'))

   if(event.target.classList.contains('interview-btn')){
    const parentNode = event.target.parentNode.parentNode;
    const mobile = parentNode.querySelector('.mobile-first').innerText;
    const react = parentNode.querySelector('.react-native').innerText;
    const remote = parentNode.querySelector('.remote-job').innerText;
    const applied = parentNode.querySelector('.applied').innerText;
    const mobileApplication = parentNode.querySelector('.mobile-application').innerText;

    parentNode.querySelector('.applied').innerText = 'Interview'

    const cardInfo = {
        mobile,
        react,
        remote,
        applied:'Interview',
        mobileApplication
    }

    const mobileExist = interviewList.find(item=> item.mobile == cardInfo.mobile);

    

    if(!mobileExist){
        interviewList.push(cardInfo)
    }
    renderInterview()

  }
})


function renderInterview (){
    filterSection.innerHTML = ''

    for(let interview of interviewList){
        console.log(interview)

        let div = document.createElement('div')
        div.className = 'card-container flex justify-between mt-4 bg-[#FFFFFF] shadow p-4'
        div.innerHTML = `
                       <div>
                    <p class="mobile-first font-bold">${interview.mobile}</p>
                    <p class="react-native text-gray-600 ">React Native Developer</p>
                    <p class="remote-job mt-3.5 mb-3.5 text-gray-600 text-[12px]">Remote • Full-time • $130,000 - $175,000</p>
                    <p class="applied bg-blue-300 w-25 p-1.5">${interview.applied}</p>
                    <p class="mobile-application text-[12px]">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>

                    <div class="mt-3.5">
                        <button class="btn bg-white text-green-600">Interview</button>
                        <button class="btn bg-white text-red-600">Rejected</button>
                    </div>
                </div>
                <div>
                    <img src="Group 1.png" alt="">
                </div>
        `

        filterSection.appendChild(div)
    }
}