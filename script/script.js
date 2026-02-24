let interviewList = [];
let rejectedList = [];
let currentApplied =['All']

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
    currentApplied = id

   
    selected.classList.remove('bg-white', 'text-gray-600');
    selected.classList.add('bg-blue-800', 'text-white');

    if(id == 'interview-jobs'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderInterview()
    }

    else if(id == 'available-jobs') {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }

    else if(id == 'rejected-jobs'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderRejected()
    }
}

mainContainer.addEventListener('click', function (event) {

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

    const mobileExist = interviewList.find(item => item.mobile == cardInfo.mobile);

    if(!mobileExist) {
        interviewList.push(cardInfo)
    }

    rejectedList = rejectedList.filter(item=> item.mobile != cardInfo.mobile);

    calculateCount();
    
    if(currentApplied == "rejected-jobs"){
        renderRejected()
    }
    
  }

   else if(event.target.classList.contains('rejected-btn')){
    const parentNode = event.target.parentNode.parentNode;
    const mobile = parentNode.querySelector('.mobile-first').innerText;
    const react = parentNode.querySelector('.react-native').innerText;
    const remote = parentNode.querySelector('.remote-job').innerText;
    const applied = parentNode.querySelector('.applied').innerText;
    const mobileApplication = parentNode.querySelector('.mobile-application').innerText;

    parentNode.querySelector('.applied').innerText = 'rejected'

    const cardInfo = {
        mobile,
        react,
        remote,
        applied:'rejected',
        mobileApplication
    }

    const mobileExist = rejectedList.find(item => item.mobile == cardInfo.mobile);

    if(!mobileExist){
        rejectedList.push(cardInfo)
    }

    interviewList = interviewList.filter(item=> item.mobile != cardInfo.mobile)

    if(currentApplied == "interview-jobs"){
        renderInterview();
    }


    calculateCount()

    
  }

})


function renderInterview(){
    filterSection.innerHTML = ''

    for(let interview of interviewList){       

        let div = document.createElement('div')
        div.className = 'card-container flex justify-between mt-4 bg-[#FFFFFF] shadow p-4'
        div.innerHTML = `
                       <div>
                    <p class="mobile-first font-bold">${interview.mobile}</p>
                    <p class="react-native text-gray-600 ">${interview.react}</p>
                    <p class="remote-job mt-3.5 mb-3.5 text-gray-600 text-[12px]">${interview.remote}</p>
                    <p class="applied bg-blue-300 w-25 p-1.5">${interview.applied}</p>
                    <p class="mobile-application text-[12px]">${interview.mobileApplication}</p>

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


function renderRejected(){
    filterSection.innerHTML = ''

    for(let rejected of rejectedList){

        let div = document.createElement('div')
        div.className = 'card-container flex justify-between mt-4 bg-[#FFFFFF] shadow p-4'
        div.innerHTML = `
                       <div>
                    <p class="mobile-first font-bold">${rejected.mobile}</p>
                    <p class="react-native text-gray-600 ">${rejected.react}</p>
                    <p class="remote-job mt-3.5 mb-3.5 text-gray-600 text-[12px]">${rejected.remote}</p>
                    <p class="applied bg-blue-300 w-25 p-1.5">${rejected.applied}</p>
                    <p class="mobile-application text-[12px]">${rejected.mobileApplication}</p>

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