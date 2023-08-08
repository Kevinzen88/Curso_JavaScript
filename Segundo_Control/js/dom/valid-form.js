const d = document;

export default function formValid(){
    const $form = d.querySelector(".form-group"),
    $inputs = d.querySelectorAll(".form-group [required]");

    console.log($inputs);

    $inputs.forEach(input =>{
        const $span = d.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("form-group-error","none");
        input.insertAdjacentElement("afterend", $span);
    });

    addEventListener("keyup", (e) =>{
        
        if(e.target.matches(".form-group [required]")){
            let $input = e.target, pattern = $input.pattern||$input.dataset.pattern;

            if(pattern && $input.value !== ""){
                console.log("tiene patron");
                let regex = new RegExp(pattern);

                return !regex.exec($input.value)
                ? d.getElementById($input.name).classList.remove("none","is-active")
                : d.getElementById($input.name).classList.add("none","is-active");
            }

            if(!pattern){
                console.log("no tiene patron");

                return $input.value === ""
                ? d.getElementById($input.name).classList.remove("none","is-active")
                : d.getElementById($input.name).classList.add("none","is-active");
            }
        
        }
    });

    d.addEventListener("submit", (e) => {
        
        alert("enviado");

        const $loader = d.querySelector(".contact-loader"), $response = d.querySelector(".contact-mess");

        $loader.classList.remove("none");

        setTimeout(() => {
            $loader.classList.add("none");
            $response.classList.remove("none");
            $form.reset();

            setTimeout(() =>{
                $response.classList.add("none");
            },300);
        },3000);
    });

}