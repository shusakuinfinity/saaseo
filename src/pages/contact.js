import React, { useState } from 'react'
import Layout from '../components/Layout'
import { navigate } from 'gatsby-link'

const encode = (data) => {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
};

const Contact = () => {

    const [state, setState] = useState({});

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": form.getAttribute("name"),
                ...state,
            }),
        })
            .then(() => navigate(form.getAttribute("action")))
            .catch((error) => alert(error));
    };

    return (
        <Layout>
            <section className="py-20">
                <div className="container px-4 mx-auto">
                    <div className="max-w-2xl mx-auto">
                        <div className="max-w-md mb-8 mx-auto text-center">
                            <h2 className="mt-2 text-4xl font-bold font-heading">お問い合わせ</h2>
                            <span className="text-sm text-blueGray-400">1～3営業日以内に、担当よりメールにて返信させていただきます</span>
                        </div>
                        <div>
                            <form
                                name="contact"
                                method="POST"
                                data-netlify="true"
                                action="/success"
                                data-netlify-honeypot="bot-field"
                                onSubmit={handleSubmit}
                            >
                                <input type="hidden" name="form-name" value="contact" />
                                <p hidden>
                                    <label>
                                        {" "}
                                        <input name="bot-field" onChange={handleChange} />
                                    </label>
                                </p>
                                <div className="mb-6">
                                    <label htmlFor="name" className="text-blueGray-600 mb-1 ml-1 text-sm">担当者名</label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="例：山田 太郎"
                                        onChange={handleChange}
                                        className="w-full p-4 font-semibold leading-none bg-blueGray-50 rounded outline-none"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="subject" className="text-blueGray-600 mb-1 ml-1 text-sm">問い合わせ内容</label>
                                    <select onChange={handleChange} id="subject" className="w-full p-4 font-semibold leading-none bg-blueGray-50 rounded outline-none">
                                        <option value="newWebsite">新しいウェブサイト制作</option>
                                        <option value="existingWebsite">既存サイトの改善</option>
                                        <option value="existingWebsite">広告運用</option>
                                        <option value="existingWebsite">SEOコンサルティング</option>
                                        <option value="existingWebsite">SaaS導入</option>
                                        <option value="discuss">相談して決めたい</option>
                                        <option value="others">その他</option>
                                    </select>
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="content" className="text-blueGray-600 mb-1 ml-1 text-sm">問い合わせ詳細</label>
                                    <textarea onChange={handleChange} id="content" className="w-full h-48 p-4 leading-none bg-blueGray-50 rounded outline-none resize-y" type="text" placeholder="お問い合わせ内容詳細" style={{ marginTop: '0px', marginBottom: '0px', height: '360px' }} defaultValue={""} />
                                </div>
                                <div className="flex justify-between items-center">
                                    <button className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded" type="submit">送信する</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Contact
