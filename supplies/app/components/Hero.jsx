
export default async function Hero() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <div className="py-6">
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              laboriosam, cumque, atque, voluptatibus iure quisquam dolore
              voluptates doloremque sint aspernatur sequi.
            </p>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              laboriosam, cumque, atque, voluptatibus iure quisquam dolore
              voluptates doloremque sint aspernatur sequi.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <fieldset className="space-y-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered w-full"
                placeholder="Email"
              />
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered w-full"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral w-full">Login</button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}