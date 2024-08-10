"use client"
import { useResetPasswordMutation } from '@/lib/services/auth';
import { resetPasswordSchema } from '@/validation/schemas';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useSearchParams } from 'next/navigation'
import formStyles from './authStyle.module.css';

const initialValues = {
    password: "",
    password_confirmation: ""
}
const ResetPassword = ({ setRoute, setOpen }) => {
    const searchParams = useSearchParams();
    const id = searchParams.get('i');
    const token = searchParams.get('t');
    const [serverErrorMessage, setServerErrorMessage] = useState('')
    const [loading, setLoading] = useState(false);
    const router = useRouter()
    const [resetPassword] = useResetPasswordMutation()
    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: resetPasswordSchema,
        onSubmit: async (values, action) => {
            setLoading(true);
            try {
                const data = { ...values, id, token }
                const response = await resetPassword(data)
                if (response.data && response.data.success === true) {
                    toast.success(response.data.message)
                    setServerErrorMessage('')
                    action.resetForm()
                    setLoading(false);
                    setOpen(false);
                    setRoute(null)
                    router.push('/')
                }
                if (response.error && response.error.data.success === false) {
                    setServerErrorMessage(response.error.data.message)
                    setLoading(false);
                }
            } catch (error) {
                // console.log(error);
                setLoading(false);
            }
        }
    })

    return (
        <>
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="newPassword" className={`${formStyles.authLabel}`} >
                    New Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
                    placeholder="Enter your new password"
                />
                {errors.password && <div className={`${formStyles.errormsg}`}>{errors.password}</div>}
                <br />
                <label htmlFor="confirmPassword" className={`${formStyles.authLabel}`} >
                    Confirm New Password
                </label>
                <input
                    type="password"
                    id="password_confirmation"
                    name="password_confirmation"
                    value={values.password_confirmation}
                    onChange={handleChange}
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
                    placeholder="Confirm your new password"
                />
                {errors.password_confirmation && <div className={`${formStyles.errormsg}`}>{errors.password_confirmation}</div>}
                <br />
                <div className={formStyles.btnBox}>
                    <button
                        className={formStyles.btn}
                        type="submit"
                        disabled={loading}>
                        {loading ? 'Loading...' : 'Reset Password'}
                    </button>
                </div>
            </form>
            {serverErrorMessage && <div className={`${formStyles.errormsg}`}>{serverErrorMessage}</div>}
        </>
    );
}

export default ResetPassword;