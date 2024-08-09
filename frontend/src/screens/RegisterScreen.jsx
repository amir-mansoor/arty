import { useState, useRef } from "react";
import { useRegisterMutation } from "../slices/userApiSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { storage } from "../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import ProgressBar from "../components/ProgressBar";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState(null);
  const [progressPercent, setProgressPercent] = useState(0);
  const [register] = useRegisterMutation();

  const dispatch = useDispatch();

  const fileRef = useRef();

  const handleFile = () => {
    fileRef.current.click();
  };

  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file) {
      return;
    }

    let ext = file.type.split("/")[1];

    const storageRef = ref(storage, `arty/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgressPercent(progress);
      },
      (error) => {
        toast.error(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setProfile(downloadURL);
          toast.success("Profile uploaded successfully.");
        });
      }
    );
  };

  const handleForm = async (e) => {
    e.preventDefault();

    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      profile.trim() === ""
    ) {
      toast.error("All fields are required.");
      return;
    }

    try {
      const res = await register({
        name,
        email,
        password,
      }).unwrap();
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className="mt-4">
      <form onSubmit={handleForm}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
          />
        </div>
        <div>
          <input
            className="hide"
            ref={fileRef}
            onChange={handleImageChange}
            type="file"
            id="avatar"
          />
        </div>
      </form>
      <button className="btn-small btn" onClick={handleFile}>
        Select File
      </button>
      {!profile && <ProgressBar percent={progressPercent} />}

      <div>
        <button onClick={handleForm} className="btn-small btn">
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterScreen;
