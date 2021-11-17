import React, { useState } from "react";
import { navigate } from "gatsby-link";
import Layout from "../components/Layout";

const encode = (data) => {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
};

const Form = () => {
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

    const [show, setShow] = useState(false)

    return (
        <Layout>
            <section className="py-20">
                <div className="container px-4 mx-auto">
                    <div className="max-w-2xl mx-auto">
                        <div className="max-w-md mb-8 mx-auto text-center">
                            <h2 className="mt-2 text-4xl font-bold font-heading">見積り依頼</h2>
                            <span className="text-sm text-blueGray-400">1～3営業日以内に、担当よりメールにて返信させていただきます</span>
                        </div>
                        <form
                            name="quotation"
                            method="post"
                            action="/success"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            onSubmit={handleSubmit}
                        >
                            <input type="hidden" name="form-name" value="quotation" />
                            <p hidden>
                                <label>
                                    {" "}
                                    <input name="bot-field" onChange={handleChange} />
                                </label>
                            </p>
                            <p className="mb-6">
                                <label className="text-blueGray-600 mb-1 ml-1 text-sm">
                                    お名前
                                    <br />
                                    <input className="w-full p-4 font-semibold leading-none bg-blueGray-50 rounded outline-none placeholder-blueGray-300" placeholder="例）田中 太郎" type="text" name="name" onChange={handleChange} />
                                </label>
                            </p>
                            <p className="mb-6">
                                <label className="text-blueGray-600 mb-1 ml-1 text-sm">
                                    会社名/店舗名
                                    <br />
                                    <input className="w-full p-4 font-semibold leading-none bg-blueGray-50 rounded outline-none placeholder-blueGray-300" placeholder="例）SaaSEO合同会社" type="text" name="company" onChange={handleChange} />
                                </label>
                            </p>
                            <p className="mb-6">
                                <label className="text-blueGray-600 mb-1 ml-1 text-sm">
                                    メールアドレス
                                    <br />
                                    <input className="w-full p-4 font-semibold leading-none bg-blueGray-50 rounded outline-none placeholder-blueGray-300" placeholder="例）name@saaseo.com" type="email" name="email" onChange={handleChange} />
                                </label>
                            </p>
                            <p className="mb-6">
                                <label className="text-blueGray-600 mb-1 ml-1 text-sm">
                                    電話番号（任意）
                                    <br />
                                    <input className="w-full p-4 font-semibold leading-none bg-blueGray-50 rounded outline-none placeholder-blueGray-300" placeholder="例）0564−123-4567" type="tel" name="phone" onChange={handleChange} />
                                </label>
                            </p>
                            <p className="mb-6">
                                <label className="text-blueGray-600 mb-1 ml-1 text-sm">
                                    現状のウェブサイトURL（無ければ空欄のままで構いません）
                                    <br />
                                    <input className="w-full p-4 font-semibold leading-none bg-blueGray-50 rounded outline-none placeholder-blueGray-300" placeholder="例）saaseo.com, https://saaseo.io" type="text" name="url" onChange={handleChange} />
                                </label>
                            </p>
                            <p className="mb-6">
                                <label className="text-blueGray-600 mb-1 ml-1 text-sm">
                                    ご予算上限（決まっていれば）
                                    <br />
                                    <input className="w-full p-4 font-semibold leading-none bg-blueGray-50 rounded outline-none placeholder-blueGray-300" placeholder="例）100万円" type="text" name="budget" onChange={handleChange} />
                                </label>
                            </p>
                            <fieldset className="mb-6">
                                <legend className="text-blueGray-600 mb-1 ml-1 text-sm font-bold">依頼する可能性のある内容をご選択ください</legend>
                                <p className="mb-2">
                                    <label className="text-blueGray-600 mb-1 ml-1 text-sm">
                                        <input type="checkbox" name="subject" value="new" onChange={handleChange} />
                                        <span className="ml-1">新規ウェブサイト制作</span>
                                    </label>
                                </p>
                                <p className="mb-2">
                                    <label className="text-blueGray-600 mb-1 ml-1 text-sm">
                                        <input type="checkbox" name="subject" value="existing" onChange={handleChange} />
                                        <span className="ml-1">既存サイト改善</span>
                                    </label>
                                </p>
                                <p className="mb-2">
                                    <label className="text-blueGray-600 mb-1 ml-1 text-sm">
                                        <input type="checkbox" name="subject" value="seo" onChange={handleChange} />
                                        <span className="ml-1">SEO対策</span>
                                    </label>
                                </p>
                                <p className="mb-2">
                                    <label className="text-blueGray-600 mb-1 ml-1 text-sm">
                                        <input type="checkbox" name="subject" value="responsive" onChange={handleChange} />
                                        <span className="ml-1">スマホ対応・レスポンシブ化</span>
                                    </label>
                                </p>
                                <p className="mb-2">
                                    <label className="text-blueGray-600 mb-1 ml-1 text-sm">
                                        <input type="checkbox" name="subject" value="speed" onChange={handleChange} />
                                        <span className="ml-1">サイト・ページスピードの速いサイト制作</span>
                                    </label>
                                </p>
                                <p className="mb-2">
                                    <label className="text-blueGray-600 mb-1 ml-1 text-sm">
                                        <input type="checkbox" name="subject" value="ads" onChange={handleChange} />
                                        <span className="ml-1">広告運用</span>
                                    </label>
                                </p>
                                <p className="mb-2">
                                    <label className="text-blueGray-600 mb-1 ml-1 text-sm">
                                        <input type="checkbox" name="subject" value="others" onChange={handleChange} />
                                        <span className="ml-1">その他（詳細欄にご記入ください）</span>
                                    </label>
                                </p>
                            </fieldset>
                            <p className="mb-6">
                                <label className="text-blueGray-600 mb-1 ml-1 text-sm">
                                    詳細内容
                                    <br />
                                    <textarea className="w-full h-48 p-4 leading-none bg-blueGray-50 rounded outline-none resize-y placeholder-blueGray-300" placeholder="経緯、目的、事業内容、希望日程、気になることなど" name="message" onChange={handleChange} />
                                </label>
                            </p>
                            <p className="text-center">
                                <button onClick={() => { setShow(!show) }} className={show ? "hidden transition duration-100" : "py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded transition duration-200"} type="submit">送信する</button>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Form;