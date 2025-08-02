"use server";

type CreatPostAction =

  | { success: true; data: any }
  | { success: false; error: any };


export default async function CreatePostAction(prevState:CreatPostAction| null, formData:FormData):Promise<CreatPostAction> {

    console.log("fawefa")
    console.log(formData);

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/posts/create`, {
        method:"POST",
        credentials: "include",
        body: formData
    })

    console.log(res)
    // const data = await res.json();

    // console.log(data);

    return {success:true , data:""};

}