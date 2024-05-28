import { Routes, Route, HashRouter as Router } from 'react-router-dom';
import { Test } from '@renderer/view/test';

const AppRouter = () => <Router>
    <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/test" element={<div>test</div>} />
    </Routes>
</Router>;

export { AppRouter };
