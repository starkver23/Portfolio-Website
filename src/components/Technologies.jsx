import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri"
import { FaJava, FaPython } from "react-icons/fa";
import { DiJavascript1, DiMysql, DiNodejs } from "react-icons/di"
import { motion } from "framer-motion";

const iconVariations = (duration) => ({
    initial: { y: 10 },
    animate: {
        y: [10, -10],
        transition: { duration: duration, ease: "linear", repeat: Infinity, repeatType: "reverse" }
    }
})

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">
                Technologies
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariations(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariations(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiNodejs className="text-7xl text-green-400" />
                </motion.div>
                <motion.div
                    variants={iconVariations(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJava className="text-7xl text-red-900" />
                </motion.div>
                <motion.div
                    variants={iconVariations(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiJavascript1 className="text-7xl text-yellow-400" />
                </motion.div>
                <motion.div
                    variants={iconVariations(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiMysql className="text-7xl text-blue-300" />
                </motion.div>
                <motion.div
                    variants={iconVariations(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPython className="text-7xl text-yellow-300" />
                </motion.div>
                <motion.div
                    variants={iconVariations(7)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiTailwindCssFill className="text-7xl text-blue-800" />
                </motion.div>
            </motion.div>
        </div >
    )
}

export default Technologies
