class CustomAlert{
    constructor(){
        //remove existeing alert if exist
        document.querySelectorAll('.custom-js-alert').forEach(alert =>{
            alert.remove();
        })
        //add custom alert html in the document
        let div = document.createElement('div');
        div.classList.add('custom-js-alert');
        div.innerHTML = `<p>Are you sure that you want to delete ?</p>
        <div class="okbox">
        <button class="ok">Ok</button>
        </div>
        <div class="confirm">
          <button>Yes</button>
          <button>No</button>
        </div>`;
        document.body.appendChild(div);
        this.alertBox = document.querySelector('.custom-js-alert');
        this.alertBoxMsg = document.querySelector('.custom-js-alert p');
        this.alertBoxOk = document.querySelector('.custom-js-alert .okbox');
        this.alertBoxConfirm = document.querySelector('.custom-js-alert .confirm');
        this.timevar;
    }

    closeAlertBox(){
        this.alertBox.style.transform = `translateY(120%)`;
        this.alertBoxConfirm.children[0].onclick = function(){
            
        }
        this.alertBoxConfirm.children[1].onclick = function(){
            
        }

    }

    alert(str = "Welcome !!",showBtn = false,time = 3000){
        //clear timeout for closing the alert if it is currently active
        clearTimeout(this.timevar);
        this.timevar = undefined;
        //show alert
        this.alertBoxMsg.textContent = str;
        this.alertBox.style.transform = `translate(0)`;
        this.alertBoxConfirm.style.display = 'none';
        this.alertBoxOk.style.display = 'none';
        this.timevar = setTimeout(() => {      
            this.alertBox.style.transform = `translateY(120%)`;   
        }, time ); 
        if(showBtn){
            this.alertBoxOk.style.display = 'flex';
            this.alertBoxOk.onclick = ()=>{      
                this.alertBox.style.transform = `translateY(120%)`;  
            }
        }
    }

    confirm(str,callbackTrue,callbackFalse = ()=>{return}){
        if(callbackTrue == null)
            throw "Cannot use confirm without callback function";
        clearTimeout(this.timevar);
        this.alertBoxMsg.textContent = str;
        this.alertBox.style.transform = `translate(0)`;
        this.alertBoxOk.style.display = 'none';
        this.alertBoxConfirm.style.display = 'flex';

        this.alertBoxConfirm.children[0].onclick = function(){
            callbackTrue();
            this.closeAlertBox();
        }.bind(this);
        this.alertBoxConfirm.children[1].onclick = function(){
            callbackFalse();
            this.closeAlertBox();
        }.bind(this);
    }

   
}

export {CustomAlert};