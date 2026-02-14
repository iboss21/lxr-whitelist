import { useState } from 'react';

const EXAMPLE_APPLICATION = `1. სახელი და გვარი (ინგლისურად!)
Salvador Chavez
2. ასაკი
21
3. წარმოშობა და ბავშვობა (მაქსიმუმ 60 სიტყვა)
Salvador Chavez დაიბადა 1878 წელს მექსიკის ჩრდილოეთ ქალაქში, თამბლვიდში — მტვრიან ქუჩებსა და უსასრულო უდაბნოს შორის. მისი ბავშვობა მძიმე იყო: მამა პატარა რანჩოს მუშა გახლდათ, დედა კი ბაზარში მუშაობდა. როცა სალვადორი თორმეტი წლის იყო, მამა მოკლეს კორუმპირებულმა ამერიკელმა შერიფმა როდესაც მათ მოუწიათ ამერიკაში წასვლა თავისი პროდუქტი გაეყიდა, დანაშაული „შეცდომად" შერაცხეს და საქმე დახურეს.
4. ხასიათი და ქცევა (მაქსიმუმ 60 სიტყვა)
ის არ არის ბოროტი, თუმცა სასტიკად შეუძლია მოექცეს მათ მიმართ ვინც სხვებს ჩაგრავს. გულით კეთილია, მაგრამ ამას სიტყვებით არ გამოხატავს, მისი სიკეთე ქმედებაში ჩანს.
5. სისუსტეები და შიშები (მაქსიმუმ 60 სიტყვა)
სალვადორს მარტივად ვერ შეაშინებთ მაგრამ როგორც ყველა ადამიანს მასაც ეშინია რაღაცეების, მაგალითად თავისი ოჯახის წევრების დაკარგვის ამის გამო მისი ყველაზე დიდი სისუსტე სალვადორის ოჯახია.
6. კონფლიქტისადმი დამოკიდებულება (მაქსიმუმ 60 სიტყვა)
თვითონ ყოველთვის ცდილობს კომფლიქტს თავი აარიდოს მაგრამ მას თავისი თავის და სხვების დაცვა შეუძლია
7. მიმდინარე მდგომარეობა (მაქსიმუმ 60 სიტყვა)
ის ამჟამად ჩავეზების ოჯახში არის რობერტოს ოჯახში და თავის ოჯახთან ერთად ებრძბის უსამართლობას.
8. მიზნები RP-ში (მაქსიმუმ 60 სიტყვა)
გახდეს ერთ ერთი ყველაზე დიდი ფიგურა მთლიან მექსიკაში და ყველას ეშინოდეს და ამავდროულად პატივს სცემდნენ მას, მისი მიუღწევადი მიზანია ყველა კორუმპირებული შერიფის მოკვლა და თავისი ოჯახის უსაფრთხოდ ყოფნაა.`;

export default function InputForm({ onEvaluate, onClear, isEvaluating }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onEvaluate(text);
    }
  };

  const handleClear = () => {
    setText('');
    onClear();
  };

  const loadExample = () => {
    setText(EXAMPLE_APPLICATION);
  };

  return (
    <div className="card-wolves">
      <h2 className="text-2xl font-bold text-wolves-gold mb-4 flex items-center">
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
        ✏️ განაცხადის ტექსტი
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="application" className="block text-sm font-medium text-gray-300 mb-2">
            ჩასვით წარდგენილი Whitelist განაცხადი:
          </label>
          <textarea
            id="application"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="textarea-wolves w-full"
            rows={20}
            placeholder="მაგალითი:&#10;1. სახელი და გვარი (ინგლისურად!)&#10;John Smith&#10;2. ასაკი&#10;25&#10;3. წარმოშობა და ბავშვობა...&#10;&#10;ჩასვით სრული განაცხადი აქ..."
            disabled={isEvaluating}
          />
          <p className="text-xs text-gray-500 mt-2">
            სიმბოლოების რაოდენობა: <span className="text-wolves-gold">{text.length}</span>
          </p>
        </div>
        
        <div className="flex flex-wrap gap-3">
          <button
            type="submit"
            disabled={!text.trim() || isEvaluating}
            className="btn-wolves btn-primary flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            {isEvaluating ? 'ვაფასებ...' : '🔍 შეფასება'}
          </button>
          
          <button
            type="button"
            onClick={loadExample}
            disabled={isEvaluating}
            className="btn-wolves btn-secondary flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            📝 მაგალითის ჩატვირთვა
          </button>
          
          <button
            type="button"
            onClick={handleClear}
            disabled={isEvaluating || !text}
            className="btn-wolves btn-secondary flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            🗑️ გასუფთავება
          </button>
        </div>
      </form>
      
      <div className="mt-6 p-4 bg-wolves-dark rounded-lg border border-wolves-border">
        <h3 className="text-sm font-bold text-wolves-gold mb-2">📋 მითითებები:</h3>
        <ul className="text-xs text-gray-400 space-y-1">
          <li>• ჩასვით სრული განაცხადი ყველა ველით</li>
          <li>• სისტემა ავტომატურად შეაფასებს 6 კატეგორიას</li>
          <li>• მინიმალური ქულა მიღებისთვის: 8.0/10</li>
          <li>• შეფასება იღებს 1-2 წამს</li>
        </ul>
      </div>
    </div>
  );
}
