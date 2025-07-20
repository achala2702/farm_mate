"use server";

type UserRegistration =
  | { success: true; data: String }
  | { success: false; error: any };

export async function userRegister(
  prevState: UserRegistration | null,
  formData: FormData
): Promise<UserRegistration> {
  try {
    const payload = {
      email: formData.get("email")?.toString(),
      password: formData.get("password")?.toString(),
      firstName: formData.get("firstName")?.toString(),
      lastName: formData.get("lastName")?.toString(),
    };

    const res = await fetch(`${process.env.BACKEND_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    console.log(data);

    if (!res.ok) {
      return { success: false, error: data.errors };
    }
    return { success: true, data: data.message };
  } catch (error) {
    console.log(error);

    return { success: false, error: "Please try again later!" };
  }
}
