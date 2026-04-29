+++
date = '2026-03-18T12:03:42-04:00'
title = "Arnav's Website"
layout = 'landing'
+++

# 👋 Hi! I'm Arnav

I'm a **Computer Engineering** student at NJIT with a minor in **Data Analytics** (Class of Dec 2026). I'm passionate about the intersection of high-speed digital hardware design and low-level firmware development. HMU if you want to work on something cool 😀

> [!IMPORTANT]
> This site is in development. Things probably don't work.

---

## My Interests

{{% columns %}}
- ### Hardware & Firmware
  Focusing on honing my **high-speed digital design** and **firmware development** skills, for embedded systems. So far, I'm familiar with:
  * **Hardware Tools:** Oscilloscopes, Logic Analyzers
  * **Software Tools:** KiCAD, FreeRTOS, ESP-IDF, STM32CubeMX + IDE, and more (details below)

- ### AI / ML
  Building/fine-tuning deep learning models and optimized inference pipelines. I consider this section *hobby-grade*; professional skills are subpar.
  * **Frameworks:** PyTorch, TensorFlow, Numpy
  * **Models:** YOLO, LLM optimization (BitNet), OpenAI Whisper
{{% /columns %}}

---

## Active Projects

{{< tabs >}}
{{% tab "SolarVision Mower" %}}
### [Autonomous Lawnmower](https://github.com/SolarVisionMower/SolarVision)

Group Engineering Capstone project. An autonomous navigation system for lawnmower, utilizing **YOLOv8 segmentation**, **LiDAR**, and **Ultra Wideband Positioning** (UWB) for real-time localization and path planning.

The project boasts *completely custom* hardware and firmware:

{{% details "Hardware" %}}
- Features a custom board for the **STM32N6** microcontroller, with embedded Neural Processing Unit.
- Additionally, features a custom **Main Board**, hosting the STM32 as well as an ESP32S3 microcontroller, and UWB tag.
- Both designed with KiCAD, fabricated through JLCPCB.
{{% /details %}}

{{% details "Firmware" %}}
- Utilizes FreeRTOS for concurrency on both, along with custom generated HAL for the STM.
- Custom firmware to interface the LiDAR and UWB on the ESP32.
{{% /details %}}

{{% /tab %}}

{{% tab "MCU-based Logic Analyzer" %}}
### Low Speed 8-Channel Digital Logic Analyzer

Group project for a Masters Embedded Systems course. We're building a STM32F446 centered, low speed Logic Analyzer. It features:

- **High Speed Signal Capture:** Captures 8 channels at 1MHz, via a DMA loop on the STM32. Then bit-packed and sent along a USB 2.0 connection.
- **Signal Decoding Capabilities:** Go-based signal decoder, capable of decoding UART, SPI, and I2C.
- **Custom GUI:** PyQt-based GUI, to display waveforms and decoded bytes in hex.
{{% /tab %}}
{{< /tabs >}}

---

## Past Projects Projects

{{< tabs >}}
{{% tab "BitSum" %}}
### [BitSum Lecture Summarizer](https://github.com/avr34/ECE381-Final)

A completely local, docker based AI stack which takes input of audio/video lectures, and transcribes and summarizes them. Uses OpenAI Whisper for transcription, and Microsoft BitNet for efficient CPU-based summaries.
{{% /tab %}}
{{% tab "NeuralNet" %}}
### [NeuralNet](https://github.com/avr34/NeuralNet)

A C library to create, train, and export feed-forward neural networks. It leverages a completely custom (non-hardware accelerated) matrix library for matrix/vector operations, as well as MSE Loss, SGD based backpropagation (using matrix derivatives), and ReLU activation.
{{% /tab %}}
{{% tab "SessionSummary" %}}
### SessionSummary Email Generator

Created a fully custom email generator for the Mathnasium of Chatham + 4 other centers. Utilizes Javascript and Node.js, and custom (effectively reverse-BNF grammar) email generation algorithm to generate 110-150 emails per day.
{{% /tab %}}
{{< /tabs >}}

---

## Technical Toolkit

| Category                     | Tools & Languages |
|:-----------------------------|:------------------|
| **Languages:**               | C, C++, MATLAB, Java, Python, Go, SQL (MySQL), GNU Octave, Latex, Javascript, VHDL |
| **Software Tools:**          | Linux (Debian), KiCAD, FreeCAD, STM32CubeMX & IDE, PlatformIO, ESP-IDF, Git, Docker, Excel |
| **Build Tools/Debuggers:**   | Apache Maven, Apache Ant, CMake, Make, MSVC & GCC, GDB, Valgrind |
| **Libraries:**               | STM32 HAL, FreeRTOS, NumPy, PyTorch, Scikit Learn, Matplotlib, Gnuplot |
| **Communication Protocols:** | UART, I2C, SPI |

---

## Connect with Me

- **LinkedIn:** <https://www.linkedin.com/in/avr33>
