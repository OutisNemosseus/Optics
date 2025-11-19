// Optics - Matrix Methods - Chapter 5
// 10 programs

export const programs = [
  {
    "id": "M11POELIPLIS",
    "title": "M11POELIPLIS - M11POELIPLIS\r",
    "description": "M11POELIPLIS\r",
    "category": "Optics - Matrix Methods",
    "chapter": "5",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# M11POELIPLIS\n# Elliptical polarized light. Similar as discussed in FileFig.M9POELIP we plot\n# np.cos( -2????x/360) on z- axis and np.cos( -2????x/360 + ????) on y-axis\n\nx = np.arange(1, 360+1, 1)\nPhi1 = 0\nPhi2 = np.pi/4\nPhi3 = np.pi/2\nPhi4 = 3*np.pi/4\nPhi5 = np.pi\nPhi6 = (5*np.pi)/4\nPhi7 = (3*np.pi)/2\nPhi8 = 7*np.pi/4\ny1 = np.cos(-2*np.pi*(x/360))\ny2 = np.cos(-2*np.pi*(x/360))\ny3 = np.cos(-2*np.pi*(x/360))\ny4 = np.cos(-2*np.pi*(x/360))\ny5 = np.cos(-2*np.pi*(x/360))\ny6 = np.cos(-2*np.pi*(x/360))\ny7 = np.cos(-2*np.pi*(x/360))\ny8 = np.cos(-2*np.pi*(x/360))\nyy1 = np.cos(-2*np.pi*(x/360) + Phi1)\nyy2 = np.cos(-2*np.pi*(x/360) + Phi2)\nyy3 = np.cos(-2*np.pi*(x/360) + Phi3)\nyy4 = np.cos(-2*np.pi*(x/360) + Phi4)\nyy5 = np.cos(-2*np.pi*(x/360) + Phi5)\nyy6 = np.cos(-2*np.pi*(x/360) + Phi6)\nyy7 = np.cos(-2*np.pi*(x/360) + Phi7)\nyy8 = np.cos(-2*np.pi*(x/360) + Phi8)\nfig = plt.figure(1)\n\nplt.subplot(4, 1, 1)\n\nplt.plot(y1,yy1)\n\nplt.xlim(-1, 1)\nplt.ylim(-1, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('y1(x)')\nplt.legend(['yy1(x)'])\nplt.subplot(4, 1, 2)\n\nplt.plot(y2,yy2)\n\nplt.xlim(-1, 1)\nplt.ylim(-1, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('y2(x)')\nplt.legend(['yy2(x)'])\nplt.subplot(4, 1, 3)\n\nplt.plot(y3,yy3)\n\nplt.xlim(-1, 1)\nplt.ylim(-1, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('y3(x)')\nplt.legend(['yy3(x)'])\nplt.subplot(4, 1, 4)\n\nplt.plot(y4,yy4)\n\nplt.xlim(-1, 1)\nplt.ylim(-1, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('y4(x)')\nplt.legend(['yy4(x)'])\nfig = plt.figure(2)\n\nplt.subplot(4, 1, 1)\n\nplt.plot(y5,yy5)\n\nplt.xlim(-1, 1)\nplt.ylim(-1, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('y5(x)')\nplt.legend(['yy5(x)'])\nplt.subplot(4, 1, 2)\n\nplt.plot(y6,yy6)\n\nplt.xlim(-1, 1)\nplt.ylim(-1, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('y6(x)')\nplt.legend(['yy6(x)'])\nplt.subplot(4, 1, 3)\n\nplt.plot(y7,yy7)\n\nplt.xlim(-1, 1)\nplt.ylim(-1, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('y7(x)')\nplt.legend(['yy7(x)'])\nplt.subplot(4, 1, 4)\n\nplt.plot(y8,yy8)\n\nplt.xlim(-1, 1)\nplt.ylim(-1, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('y8(x)')\nplt.legend(['yy8(x)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% M11POELIPLIS\n% Elliptical polarized light. Similar as discussed in FileFig.M9POELIP we plot\n% cos( -2????x/360) on z- axis and cos( -2????x/360 + ????) on y-axis\nfunction M11POELIPLIS;\nx = (1:1:360);\nPhi1 = 0;\nPhi2 = pi/4;\nPhi3 = pi/2;\nPhi4 = 3*pi/4;\nPhi5 = pi;\nPhi6 = (5*pi)/4;\nPhi7 = (3*pi)/2;\nPhi8 = 7*pi/4;\ny1 = cos(-2*pi*(x/360));\ny2 = cos(-2*pi*(x/360));\ny3 = cos(-2*pi*(x/360));\ny4 = cos(-2*pi*(x/360));\ny5 = cos(-2*pi*(x/360));\ny6 = cos(-2*pi*(x/360));\ny7 = cos(-2*pi*(x/360));\ny8 = cos(-2*pi*(x/360));\nyy1 = cos(-2*pi*(x/360) + Phi1);\nyy2 = cos(-2*pi*(x/360) + Phi2);\nyy3 = cos(-2*pi*(x/360) + Phi3);\nyy4 = cos(-2*pi*(x/360) + Phi4);\nyy5 = cos(-2*pi*(x/360) + Phi5);\nyy6 = cos(-2*pi*(x/360) + Phi6);\nyy7 = cos(-2*pi*(x/360) + Phi7);\nyy8 = cos(-2*pi*(x/360) + Phi8);\n\n\nfigure(1);\nsubplot(4,1,1);\nplot(y1,yy1);\naxis([-1 1 -1 1]);                  % PLOTS LIMITS                    \nxlabel('y1(x)');\nlegend('yy1(x)');\n\nsubplot(4,1,2);\nplot(y2,yy2);\naxis([-1 1 -1 1]);                  % PLOTS LIMITS                    \nxlabel('y2(x)');\nlegend('yy2(x)');\n\nsubplot(4,1,3);\nplot(y3,yy3);\naxis([-1 1 -1 1]);                  % PLOTS LIMITS                    \nxlabel('y3(x)');\nlegend('yy3(x)');\n\nsubplot(4,1,4);\nplot(y4,yy4);\naxis([-1 1 -1 1]);                  % PLOTS LIMITS                    \nxlabel('y4(x)');\nlegend('yy4(x)');\n\nfigure(2);\nsubplot(4,1,1);\nplot(y5,yy5);\naxis([-1 1 -1 1]);                  % PLOTS LIMITS                    \nxlabel('y5(x)');\nlegend('yy5(x)');\n\nsubplot(4,1,2);\nplot(y6,yy6);\naxis([-1 1 -1 1]);                  % PLOTS LIMITS                    \nxlabel('y6(x)');\nlegend('yy6(x)');\n\nsubplot(4,1,3);\nplot(y7,yy7);\naxis([-1 1 -1 1]);                  % PLOTS LIMITS                    \nxlabel('y7(x)');\nlegend('yy7(x)');\n\nsubplot(4,1,4);\nplot(y8,yy8);\naxis([-1 1 -1 1]);                  % PLOTS LIMITS                    \nxlabel('y8(x)');\nlegend('yy8(x)');",
    "cCode": "",
    "defaultParams": {},
    "displayName": "M11POELIPLIS",
    "tags": [
      "chapter5",
      "matrix-methods"
    ],
    "wikipediaLinks": [
      {
        "title": "Ray transfer matrix analysis",
        "url": "https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis"
      },
      {
        "title": "ABCD matrix",
        "url": "https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis"
      }
    ]
  },
  {
    "id": "of",
    "title": "of - M2FRN2L\r",
    "description": "M2FRN2L\r",
    "category": "Optics - Matrix Methods",
    "chapter": "5",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# M2FRN2L\n# Fresnel's formulas as function of angle of incidence for first medium 1 and\n# second medium 2 and n1<n2.\n# .\n# 1. Reflection coefficients.\n# Absolute value and imaginary parts for p-case and s-case.\n\nTheta = np.arange(0.1, 90+0.1, 0.1)\nn1 = 1\nn2 = 1.5\nrp = ((n2/n1)*np.cos(2*(np.pi/360)*Theta)-np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/((n2/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))\nrs = (np.cos(2*(np.pi/360)*Theta)-(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))\nfig = plt.figure(1)\n\nplt.subplot(2, 2, 1)\n\nplt.plot(Theta,np.abs(rp)\n)\nplt.xlim(0, 100)\nplt.ylim(0, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.title('p - case')\nplt.legend(['abs(rp(\theta))'])\nplt.subplot(2, 2, 2)\n\nplt.plot(Theta,np.abs(rs)\n)\nplt.xlim(0, 100)\nplt.ylim(0, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.title('s - case')\nplt.legend(['abs(rs(\theta))'])\nplt.subplot(2, 2, 3)\n\nplt.plot(Theta,angle(rp)\n)\nplt.xlim(0, 100)\nplt.ylim(-4, 4)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.legend(['angle(rp(\theta))'])\nplt.subplot(2, 2, 4)\n\nplt.plot(Theta,angle(rs)\n)\nplt.xlim(0, 100)\nplt.ylim(-4, 4)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.legend(['angle(rs(\theta))'])\n# 2. Transimission coefficient.\n# Absolute value and imaginary value part for p-case and s-case.\n\ntp = (2*np.cos(2*(np.pi/360)*Theta))/((n2/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))\nts = (2*np.cos(2*(np.pi/360)*Theta))/(np.cos(2*(np.pi/360)*Theta)+(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))\nfig = plt.figure(2)\n\nplt.subplot(2, 2, 1)\n\nplt.plot(Theta,np.abs(tp)\n)\nplt.xlim(0, 100)\nplt.ylim(0, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.title('p - case')\nplt.legend(['abs(tp(\theta))'])\nplt.subplot(2, 2, 2)\n\nplt.plot(Theta,np.abs(ts)\n)\nplt.xlim(0, 100)\nplt.ylim(0, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.title('s - case')\nplt.legend(['abs(ts(\theta))'])\nplt.subplot(2, 2, 3)\n\nplt.plot(Theta,angle(tp)\n)\nplt.xlim(0, 100)\nplt.ylim(-2, 3)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.legend(['angle(tp(\theta))'])\nplt.subplot(2, 2, 4)\n\nplt.plot(Theta,angle(ts)\n)\nplt.xlim(0, 100)\nplt.ylim(-2, 3)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.legend(['angle(ts(\theta))'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% M2FRN2L\n% Fresnel's formulas as function of angle of incidence for first medium 1 and\n% second medium 2 and n1<n2.\n% .\n% 1. Reflection coefficients.\n% Absolute value and imaginary parts for p-case and s-case.\nfunction M2FRN2L;\nTheta = (0.1:0.1:90);\nn1 = 1;\nn2 = 1.5;\n\nrp = ((n2/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./((n2/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));\nrs = (cos(2*(pi/360)*Theta)-(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));\n\nfigure(1);\nsubplot(2,2,1);\nplot(Theta,abs(rp));\naxis([0 100 0 1]);                  % PLOTS LIMITS                    \nxlabel('\theta');\ntitle('p - case');\nlegend('abs(rp(\theta))');\n\nsubplot(2,2,2);\nplot(Theta,abs(rs));\naxis([0 100 0 1]);                  % PLOTS LIMITS                    \nxlabel('\theta');\ntitle('s - case');\nlegend('abs(rs(\theta))');\n\nsubplot(2,2,3);\nplot(Theta,angle(rp));\naxis([0 100 -4 4]);                  % PLOTS LIMITS                    \nxlabel('\theta');\nlegend('angle(rp(\theta))');\n\n\nsubplot(2,2,4);\nplot(Theta,angle(rs));\naxis([0 100 -4 4]);                  % PLOTS LIMITS                    \nxlabel('\theta');\nlegend('angle(rs(\theta))');\n\n% 2. Transimission coefficient.\n% Absolute value and imaginary value part for p-case and s-case.\n\ntp = (2*cos(2*(pi/360)*Theta))./((n2/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));\nts = (2*cos(2*(pi/360)*Theta))./(cos(2*(pi/360)*Theta)+(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));\n\nfigure(2);\nsubplot(2,2,1);\nplot(Theta,abs(tp));\naxis([0 100 0 1]);                  % PLOTS LIMITS                    \nxlabel('\theta');\ntitle('p - case');\nlegend('abs(tp(\theta))');\n\nsubplot(2,2,2);\nplot(Theta,abs(ts));\naxis([0 100 0 1]);                  % PLOTS LIMITS                    \nxlabel('\theta');\ntitle('s - case');\nlegend('abs(ts(\theta))');\n\nsubplot(2,2,3);\nplot(Theta,angle(tp));\naxis([0 100 -2 3]);                  % PLOTS LIMITS                    \nxlabel('\theta');\nlegend('angle(tp(\theta))');\n\nsubplot(2,2,4);\nplot(Theta,angle(ts));\naxis([0 100 -2 3]);                  % PLOTS LIMITS                    \nxlabel('\theta');\nlegend('angle(ts(\theta))');\n\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "M2FRN2L",
    "tags": [
      "chapter5",
      "matrix-methods",
      "reflection"
    ],
    "wikipediaLinks": [
      {
        "title": "Ray transfer matrix analysis",
        "url": "https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis"
      },
      {
        "title": "Reflection (physics)",
        "url": "https://en.wikipedia.org/wiki/Reflection_(physics)"
      },
      {
        "title": "ABCD matrix",
        "url": "https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis"
      }
    ]
  },
  {
    "id": "of",
    "title": "of - M3FRN2S\r",
    "description": "M3FRN2S\r",
    "category": "Optics - Matrix Methods",
    "chapter": "5",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# M3FRN2S\n# Fresnel's formulas as function of angle of incidence for first medium 1 and\n# second medium 2 and n1>n2.\n\n# 1. Reflection coefficients.\n# Absolute value and imaginary parts for p-case and s-case.\n\nn1 = 1.5\nn2 = 1\nTheta = np.arange(0.1, 90+0.1, 0.1)\nrp = ((n2/n1)*np.cos(2*(np.pi/360)*Theta)-np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/((n2/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))\nrs = (np.cos(2*(np.pi/360)*Theta)-(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))\nfig = plt.figure(1)\n\nplt.subplot(2, 2, 1)\n\nplt.plot(Theta,np.abs(rp)\n)\nplt.xlim(0, 100)\nplt.ylim(0, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.title('p - case')\nplt.legend(['abs(rp(\theta))'])\nplt.subplot(2, 2, 2)\n\nplt.plot(Theta,np.abs(rs)\n)\nplt.xlim(0, 100)\nplt.ylim(0, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.title('s - case')\nplt.legend(['abs(rs(\theta))'])\nplt.subplot(2, 2, 3)\n\nplt.plot(Theta,angle(rp)\n)\nplt.xlim(0, 100)\nplt.ylim(-4, 4)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.legend(['angle(rp(\theta))'])\nplt.subplot(2, 2, 4)\n\nplt.plot(Theta,angle(rs)\n)\nplt.xlim(0, 100)\nplt.ylim(-4, 4)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.legend(['angle(rs(\theta))'])\n# 2. Transimission coefficient.\n# Absolute value and imaginary value part for p-case and s-case.\n\ntp = (2*np.cos(2*(np.pi/360)*Theta))/((n2/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))\nts = (2*np.cos(2*(np.pi/360)*Theta))/(np.cos(2*(np.pi/360)*Theta)+(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))\nfig = plt.figure(2)\n\nplt.subplot(2, 2, 1)\n\nplt.plot(Theta,np.abs(tp)\n)\nplt.xlim(0, 100)\nplt.ylim(0, 4)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.title('p - case')\nplt.legend(['abs(tp(\theta))'])\nplt.subplot(2, 2, 2)\n\nplt.plot(Theta,np.abs(ts)\n)\nplt.xlim(0, 100)\nplt.ylim(0, 2)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.title('s - case')\nplt.legend(['abs(ts(\theta))'])\nplt.subplot(2, 2, 3)\n\nplt.plot(Theta,angle(tp)\n)\nplt.xlim(0, 100)\nplt.ylim(-2, 3)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.legend(['angle(tp(\theta))'])\nplt.subplot(2, 2, 4)\n\nplt.plot(Theta,angle(ts)\n)\nplt.xlim(0, 100)\nplt.ylim(-2, 3)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.legend(['angle(ts(\theta))'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% M3FRN2S\n% Fresnel's formulas as function of angle of incidence for first medium 1 and\n% second medium 2 and n1>n2.\n\n% 1. Reflection coefficients.\n% Absolute value and imaginary parts for p-case and s-case.\nfunction M3FRN2S;\nn1 = 1.5;\nn2 = 1;\n\nTheta = (0.1:0.1:90);\n\n\nrp = ((n2/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./((n2/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));\nrs = (cos(2*(pi/360)*Theta)-(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));\n\nfigure(1);\nsubplot(2,2,1);\nplot(Theta,abs(rp));\naxis([0 100 0 1]);                  % PLOTS LIMITS                    \nxlabel('\theta');\ntitle('p - case');\nlegend('abs(rp(\theta))');\n\nsubplot(2,2,2);\nplot(Theta,abs(rs));\naxis([0 100 0 1]);                  % PLOTS LIMITS                    \nxlabel('\theta');\ntitle('s - case');\nlegend('abs(rs(\theta))');\n\nsubplot(2,2,3);\nplot(Theta,angle(rp));\naxis([0 100 -4 4]);                  % PLOTS LIMITS                    \nxlabel('\theta');\nlegend('angle(rp(\theta))');\n\nsubplot(2,2,4);\nplot(Theta,angle(rs));\naxis([0 100 -4 4]);                  % PLOTS LIMITS                    \nxlabel('\theta');\nlegend('angle(rs(\theta))');\n\n% 2. Transimission coefficient.\n% Absolute value and imaginary value part for p-case and s-case.\n\ntp = (2*cos(2*(pi/360)*Theta))./((n2/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));\nts = (2*cos(2*(pi/360)*Theta))./(cos(2*(pi/360)*Theta)+(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));\n\nfigure(2);\nsubplot(2,2,1);\nplot(Theta,abs(tp));\naxis([0 100 0 4]);                  % PLOTS LIMITS                    \nxlabel('\theta');\ntitle('p - case');\nlegend('abs(tp(\theta))');\n\nsubplot(2,2,2);\nplot(Theta,abs(ts));\naxis([0 100 0 2]);                  % PLOTS LIMITS                    \nxlabel('\theta');\ntitle('s - case');\nlegend('abs(ts(\theta))');\n\nsubplot(2,2,3);\nplot(Theta,angle(tp));\naxis([0 100 -2 3]);                  % PLOTS LIMITS                    \nxlabel('\theta');\nlegend('angle(tp(\theta))');\n\nsubplot(2,2,4);\nplot(Theta,angle(ts));\naxis([0 100 -2 3]);                  % PLOTS LIMITS                    \nxlabel('\theta');\nlegend('angle(ts(\theta))');\n\n\n\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "M3FRN2S",
    "tags": [
      "chapter5",
      "matrix-methods",
      "reflection"
    ],
    "wikipediaLinks": [
      {
        "title": "Ray transfer matrix analysis",
        "url": "https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis"
      },
      {
        "title": "Reflection (physics)",
        "url": "https://en.wikipedia.org/wiki/Reflection_(physics)"
      },
      {
        "title": "ABCD matrix",
        "url": "https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis"
      }
    ]
  },
  {
    "id": "M4SNELL",
    "title": "M4SNELL - M4SNELL\r",
    "description": "M4SNELL\r",
    "category": "Optics - Matrix Methods",
    "chapter": "5",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# M4SNELL\n# Snellius Law for real and imaginary angle of refraction.\n# We have n1 sin?1 = n2 sin?2, or ?2 = asin((n1/n2)sin?1).\n# For n1> n2, after ?1is larger than the criticl angle, ?2 becomes complex.\n# with x + iy for ?2\n\n\n\n# 1. Graph of ????2 = asin((n1/n2)sin????1) from 0 to 90 for n1<n2\n\nTheta1 = np.arange(1, 90+1, 1)\nn1 = 1\nn2 = 1.5\nTheta2 = asin((n1/n2)*np.sin(2*(np.pi/360)*Theta1))\nfig = plt.figure(1)\n\nplt.subplot(2, 1, 1)\n\nplt.plot(Theta1,Theta2)\n\nplt.xlim(0, 100)\nplt.ylim(0, 1)\n;                  # PLOTS LIMITS                    \nxlabel('\theta1','Fontsize',12)\nplt.legend(['\theta2(\theta1)'])\nplt.title('n1<n2')\n# 2. Graph of ????2 = asin((n1/n2)sin????1) from 0 to 90 for n1>n2\n\nTheta1 = np.arange(1, 90+1, 1)\nnn1 = 1.5\nnn2 =1\nTheta2 = asin((nn1/nn2)*np.sin(2*(np.pi/360)*Theta1))\nplt.subplot(2, 1, 2)\n\nplt.plot(Theta1,Theta2)\n\nplt.xlim(0, 60)\nplt.ylim(0, 2)\n;                  # PLOTS LIMITS                    \nxlabel('\theta1','Fontsize',12)\nplt.legend(['\theta2(\theta1)'])\nplt.title('n1>n2')\n# 3. Graphs of real and imaginary parts separately.\n\nfig = plt.figure(2)\n\nplt.subplot(1, 2, 1)\n\nplt.plot(Theta1,real(Theta2)\n)\nplt.xlim(0, 100)\nplt.ylim(0, 2)\n;                  # PLOTS LIMITS                    \nxlabel('\theta1','Fontsize',12)\nplt.legend(['real(\theta2(\theta1))'])\nplt.subplot(1, 2, 2)\n\nplt.plot(Theta1,-imag(Theta2)\n)\nplt.xlim(0, 100)\nplt.ylim(-1, 0)\n;                  # PLOTS LIMITS                    \nxlabel('\theta1','Fontsize',12)\nplt.legend(['-imag(\theta2(\theta1))'])\nThetac = (360/(2*np.pi))*asin(nn2/nn1)\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% M4SNELL\n% Snellius Law for real and imaginary angle of refraction.\n% We have n1 sin?1 = n2 sin?2, or ?2 = asin((n1/n2)sin?1).\n% For n1> n2, after ?1is larger than the criticl angle, ?2 becomes complex.\n% with x + iy for ?2\n\n\nfunction M4SNELL;\n% 1. Graph of ????2 = asin((n1/n2)sin????1) from 0 to 90 for n1<n2\n\nTheta1 = (1:1:90);\nn1 = 1;\nn2 = 1.5;\nTheta2 = asin((n1/n2)*sin(2*(pi/360)*Theta1));\n\nfigure(1);\nsubplot(2,1,1);\nplot(Theta1,Theta2);\naxis([0 100 0 1]);                  % PLOTS LIMITS                    \nxlabel('\theta1','Fontsize',12);\nlegend('\theta2(\theta1)');\ntitle('n1<n2');\n\n% 2. Graph of ????2 = asin((n1/n2)sin????1) from 0 to 90 for n1>n2\n\nTheta1 = (1:1:90);\nnn1 = 1.5;\nnn2 =1;\nTheta2 = asin((nn1/nn2)*sin(2*(pi/360)*Theta1));\n\nsubplot(2,1,2);\nplot(Theta1,Theta2);\naxis([0 60 0 2]);                  % PLOTS LIMITS                    \nxlabel('\theta1','Fontsize',12);\nlegend('\theta2(\theta1)');\ntitle('n1>n2');\n\n% 3. Graphs of real and imaginary parts separately.\n\nfigure(2);\nsubplot(1,2,1);\nplot(Theta1,real(Theta2));\naxis([0 100 0 2]);                  % PLOTS LIMITS                    \nxlabel('\theta1','Fontsize',12);\nlegend('real(\theta2(\theta1))');\n\nsubplot(1,2,2);\nplot(Theta1,-imag(Theta2));\naxis([0 100 -1 0]);                  % PLOTS LIMITS                    \nxlabel('\theta1','Fontsize',12);\nlegend('-imag(\theta2(\theta1))');\n\n\nThetac = (360/(2*pi))*asin(nn2/nn1)",
    "cCode": "",
    "defaultParams": {},
    "displayName": "M4SNELL",
    "tags": [
      "chapter5",
      "matrix-methods",
      "refraction"
    ],
    "wikipediaLinks": [
      {
        "title": "Ray transfer matrix analysis",
        "url": "https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis"
      },
      {
        "title": "Refraction",
        "url": "https://en.wikipedia.org/wiki/Refraction"
      },
      {
        "title": "ABCD matrix",
        "url": "https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis"
      }
    ]
  },
  {
    "id": "of",
    "title": "of - M5FRINTN2L\r",
    "description": "M5FRINTN2L\r",
    "category": "Optics - Matrix Methods",
    "chapter": "5",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# M5FRINTN2L\n\n# Fresnel's formulas as function of angle of incidence for n1<n2\n# for Rp = rp**2, Rs = rs**2, and Tp = 1- Rp, Ts = 1-Rs\n\n# 1. Amplitude reflection coefficients.\n\n\nn1 = 1\nn2 = 1.5\nTheta = np.arange(0, 90+0.4, 0.4)\nrp = ((n2/n1)*np.cos(2*(np.pi/360)*Theta)-np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/((n2/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))\nrs = (np.cos(2*(np.pi/360)*Theta)-(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))\n# 2. Reflection: Intensities\n\nRp = rp**2\nRs = rs**2\nfig = plt.figure(1)\n\nplt.subplot(2, 2, 1)\n\nplt.plot(Theta,rp**2)\n\nplt.xlim(0, 100)\nplt.ylim(0, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.title('p - case')\nplt.legend(['rp(\theta)^2'])\nplt.subplot(2, 2, 2)\n\nplt.plot(Theta,rs**2)\n\nplt.xlim(0, 100)\nplt.ylim(0, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.title('s - case')\nplt.legend(['rs(\theta)^2'])\n# 3. Transmission: Intensities\n\nTp = 1 - Rp\nTs = 1 - Rs\nplt.subplot(2, 2, 3)\n\nplt.plot(Theta,Tp)\n\nplt.xlim(0, 100)\nplt.ylim(0, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.legend(['Tp(\theta)'])\nplt.subplot(2, 2, 4)\n\nplt.plot(Theta,Ts)\n\nplt.xlim(0, 100)\nplt.ylim(0, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.legend(['Ts(\theta)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% M5FRINTN2L\n\n% Fresnel's formulas as function of angle of incidence for n1<n2\n% for Rp = rp^2, Rs = rs^2, and Tp = 1- Rp, Ts = 1-Rs\n\n% 1. Amplitude reflection coefficients.\n\nfunction M5FRINTN2L;\nn1 = 1;\nn2 = 1.5;\nTheta = (0:0.4:90);\n\nrp = ((n2/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./((n2/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));\nrs = (cos(2*(pi/360)*Theta)-(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));\n\n% 2. Reflection: Intensities\n\nRp = rp.^2;\nRs = rs.^2;\n\nfigure(1);\nsubplot(2,2,1);\nplot(Theta,rp.^2);\naxis([0 100 0 1]);                  % PLOTS LIMITS                    \nxlabel('\theta');\ntitle('p - case');\nlegend('rp(\theta)^2');\n\nsubplot(2,2,2);\nplot(Theta,rs.^2);\naxis([0 100 0 1]);                  % PLOTS LIMITS                    \nxlabel('\theta');\ntitle('s - case');\nlegend('rs(\theta)^2');\n\n% 3. Transmission: Intensities\n\nTp = 1 - Rp;\nTs = 1 - Rs;\n\nsubplot(2,2,3);\nplot(Theta,Tp);\naxis([0 100 0 1]);                  % PLOTS LIMITS                    \nxlabel('\theta');\nlegend('Tp(\theta)');\n\nsubplot(2,2,4);\nplot(Theta,Ts);\naxis([0 100 0 1]);                  % PLOTS LIMITS                    \nxlabel('\theta');\nlegend('Ts(\theta)');\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "M5FRINTN2L",
    "tags": [
      "chapter5",
      "matrix-methods",
      "reflection",
      "amplitude"
    ],
    "wikipediaLinks": [
      {
        "title": "Ray transfer matrix analysis",
        "url": "https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis"
      },
      {
        "title": "Reflection (physics)",
        "url": "https://en.wikipedia.org/wiki/Reflection_(physics)"
      },
      {
        "title": "Amplitude",
        "url": "https://en.wikipedia.org/wiki/Amplitude"
      },
      {
        "title": "ABCD matrix",
        "url": "https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis"
      }
    ]
  },
  {
    "id": "of",
    "title": "of - M6FRINTN2S\r",
    "description": "M6FRINTN2S\r",
    "category": "Optics - Matrix Methods",
    "chapter": "5",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# M6FRINTN2S\n\n# Fresnel's formulas as function of angle of incidence for n1>n2\n# for Rp = rp**2, Rs = rs**2, and Tp = 1- Rp, Ts = 1-Rs\n\n# 1. Amplitude reflection coefficients.\n\n\nn1 = 1.5\nn2 = 1\nTheta = np.arange(0, 90+0.01, 0.01)\nrp = ((n2/n1)*np.cos(2*(np.pi/360)*Theta)-np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/((n2/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))\nrs = (np.cos(2*(np.pi/360)*Theta)-(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))\n# 2. Reflection: Intensities\n\nRp = rp*conj(rp)\nRs = rs*conj(rs)\nfig = plt.figure(1)\n\nplt.subplot(2, 2, 1)\n\nplt.plot(Theta,Rp)\n\nplt.xlim(0, 100)\nplt.ylim(0, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.title('p - case')\nplt.legend(['Rp(\theta)'])\nplt.subplot(2, 2, 2)\n\nplt.plot(Theta,Rs)\n\nplt.xlim(0, 100)\nplt.ylim(0, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.title('s - case')\nplt.legend(['Rs(\theta)'])\n# 3. Transmission: Intensities\n\nTp = 1 - Rp\nTs = 1 - Rs\nplt.subplot(2, 2, 3)\n\nplt.plot(Theta,Tp)\n\nplt.xlim(0, 100)\nplt.ylim(0, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.title('p - case')\nplt.legend(['Tp(\theta)'])\nplt.subplot(2, 2, 4)\n\nplt.plot(Theta,Ts)\n\nplt.xlim(0, 100)\nplt.ylim(0, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.title('s - case')\nplt.legend(['Ts(\theta)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% M6FRINTN2S\n\n% Fresnel's formulas as function of angle of incidence for n1>n2\n% for Rp = rp^2, Rs = rs^2, and Tp = 1- Rp, Ts = 1-Rs\n\n% 1. Amplitude reflection coefficients.\n\nfunction M6FRINTN2S;\n\nn1 = 1.5;\nn2 = 1;\nTheta = (0:0.01:90);\n\nrp = ((n2/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./((n2/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));\nrs = (cos(2*(pi/360)*Theta)-(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));\n\n% 2. Reflection: Intensities\n\nRp = rp.*conj(rp);\nRs = rs.*conj(rs);\n\n\nfigure(1);\nsubplot(2,2,1);\nplot(Theta,Rp);\naxis([0 100 0 1]);                  % PLOTS LIMITS                    \nxlabel('\theta');\ntitle('p - case');\nlegend('Rp(\theta)');\n\nsubplot(2,2,2);\nplot(Theta,Rs);\naxis([0 100 0 1]);                  % PLOTS LIMITS                    \nxlabel('\theta');\ntitle('s - case');\nlegend('Rs(\theta)');\n\n% 3. Transmission: Intensities\n\nTp = 1 - Rp;\nTs = 1 - Rs;\n\n\nsubplot(2,2,3);\nplot(Theta,Tp);\naxis([0 100 0 1]);                  % PLOTS LIMITS                    \nxlabel('\theta');\ntitle('p - case');\nlegend('Tp(\theta)');\n\nsubplot(2,2,4);\nplot(Theta,Ts);\naxis([0 100 0 1]);                  % PLOTS LIMITS                    \nxlabel('\theta');\ntitle('s - case');\nlegend('Ts(\theta)');",
    "cCode": "",
    "defaultParams": {},
    "displayName": "M6FRINTN2S",
    "tags": [
      "chapter5",
      "matrix-methods",
      "reflection",
      "amplitude"
    ],
    "wikipediaLinks": [
      {
        "title": "Ray transfer matrix analysis",
        "url": "https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis"
      },
      {
        "title": "Reflection (physics)",
        "url": "https://en.wikipedia.org/wiki/Reflection_(physics)"
      },
      {
        "title": "Amplitude",
        "url": "https://en.wikipedia.org/wiki/Amplitude"
      },
      {
        "title": "ABCD matrix",
        "url": "https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis"
      }
    ]
  },
  {
    "id": "M7FREVA",
    "title": "M7FREVA - M7FREVA. Penetration into the less dense medium at total reflection.\r",
    "description": "M7FREVA. Penetration into the less dense medium at total reflection.\r",
    "category": "Optics - Matrix Methods",
    "chapter": "5",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# M7FREVA. Penetration into the less dense medium at total reflection.\n\n# Exponential factor for decrease of amplitude into the less\n# dense medium with -Y for two different refractive indices:\n\n# ?c is the critical angle\n\n# Different refractive indices. The value \"a\" is used to \"be off\" the critical angle\n\n\n# First we set\na = 2\nn1 = 1.5\nn2 = 1\nLamda = 0.0005\nnn1 = 3.4\nnn2 = 1\nz = asin(n2/n1)\nzz = asin(nn2/nn1)\nY = np.arange(-0.00005, -0.001+-0.00005, -0.00005)\nTheta1c = z * 360/(2*np.pi)\nTheta2c = zz * 360/(2*np.pi)\n\n# Theta1c = 41.81\n# Theta2c = 17.105\nTheta1  = Theta1c + 2\nTheta2 =  Theta2c + a\nk2 = 2*(np.pi/Lamda) * n2\nA = 1\nkk2 = 2 * (np.pi/Lamda) * nn2\ny1 = A*np.exp(Y*k2*np.sqrt((n1*np.sin((2*np.pi/360)*Theta1)/n2)**2 - 1))\ny2 = A*np.exp(Y*kk2*np.sqrt((nn1*np.sin((2*np.pi/360)*Theta2)/nn2)**2 - 1))\nfig = plt.figure(1)\n\nplt.plot(Y,y1,Y,y2)\n\nplt.xlim(-1e-3, 0)\nplt.ylim(0, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('Y')\nplt.legend(['y1(Y)', 'y2(Y)'])\n# To study different angles, make refractive indices the same for both and change \"a\"\n# to values larger than 2.\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% M7FREVA. Penetration into the less dense medium at total reflection.\n\n% Exponential factor for decrease of amplitude into the less\n% dense medium with -Y for two different refractive indices:\n\n% ?c is the critical angle\n\n% Different refractive indices. The value \"a\" is used to \"be off\" the critical angle\n\nfunction M7FREVA;\n% First we set\na = 2;\nn1 = 1.5;\nn2 = 1;\nLamda = 0.0005;\nnn1 = 3.4;\nnn2 = 1;\nz = asin(n2/n1);  \nzz = asin(nn2/nn1);\n\nY = (-0.00005:-0.00005:-0.001);\n\nTheta1c = z * 360/(2*pi)\nTheta2c = zz * 360/(2*pi)\n\n% Theta1c = 41.81;\n% Theta2c = 17.105;\n\nTheta1  = Theta1c + 2;\nTheta2 =  Theta2c + a;\n\nk2 = 2*(pi/Lamda) * n2;\nA = 1;\nkk2 = 2 * (pi/Lamda) * nn2;\n\ny1 = A*exp(Y*k2*sqrt((n1*sin((2*pi/360)*Theta1)/n2)^2 - 1));\ny2 = A*exp(Y*kk2*sqrt((nn1*sin((2*pi/360)*Theta2)/nn2)^2 - 1));\n\nfigure(1);\nplot(Y,y1,Y,y2);\naxis([-1e-3 0 0 1]);                  % PLOTS LIMITS                    \nxlabel('Y');\nlegend('y1(Y)','y2(Y)');\n\n% To study different angles, make refractive indices the same for both and change \"a\"\n% to values larger than 2.",
    "cCode": "",
    "defaultParams": {},
    "displayName": "M7FREVA. Penetration into the less dense medium at total reflection.",
    "tags": [
      "chapter5",
      "matrix-methods",
      "reflection",
      "amplitude"
    ],
    "wikipediaLinks": [
      {
        "title": "Ray transfer matrix analysis",
        "url": "https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis"
      },
      {
        "title": "Reflection (physics)",
        "url": "https://en.wikipedia.org/wiki/Reflection_(physics)"
      },
      {
        "title": "Amplitude",
        "url": "https://en.wikipedia.org/wiki/Amplitude"
      },
      {
        "title": "ABCD matrix",
        "url": "https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis"
      }
    ]
  },
  {
    "id": "M8POLIN",
    "title": "M8POLIN - M8POLIN\r",
    "description": "M8POLIN\r",
    "category": "Optics - Matrix Methods",
    "chapter": "5",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# M8POLIN\n# Linearly polarized light.\n# Graph of np.cos( 2?x/360) on x-axis and np.cos(2?x/360 + ?) on y-axis\n\nx = np.arange(1, 360+1, 1)\n# 1. Before enterting the birifringent plate X = 0\nPhi1 = 0\ny1 = np.cos(2*np.pi*(x/360))\nz1 = np.cos(2*np.pi*(x/360) +  (2*np.pi*Phi1)/360)\nfig = plt.figure(1)\n\nplt.subplot(2, 2, 1)\n\nplt.plot(x,y1,x,z1)\n\nplt.xlim(0, 400)\nplt.ylim(-1, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('x')\nplt.title('Each seperate')\nplt.legend(['y1(x)', 'z1(x)'])\nplt.subplot(2, 2, 2)\n\nplt.plot(y1,z1)\n\nplt.xlim(-1, 1)\nplt.ylim(-1, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('y1')\nplt.title('One plotted against the other')\nplt.legend(['z1(y1)'])\n# 2. At the plane X = L\nPhi2 = 180\ny1 = np.cos(2*np.pi*(x/360))\nz1 = np.cos(2*np.pi*(x/360) +  (2*np.pi*Phi2)/360)\nplt.subplot(2, 2, 3)\n\nplt.plot(x,y1,x,z1)\n\nplt.xlim(0, 400)\nplt.ylim(-1, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('x')\nplt.title('Each seperate')\nplt.legend(['y1(x)', 'z1(x)'])\nplt.subplot(2, 2, 4)\n\nplt.plot(y1,z1)\n\nplt.xlim(-1, 1)\nplt.ylim(-1, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('y1')\nplt.title('One plotted against the other')\nplt.legend(['z1(y1)'])\n# The resulting vibration is along the diagonal\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% M8POLIN\n% Linearly polarized light.\n% Graph of cos( 2?x/360) on x-axis and cos(2?x/360 + ?) on y-axis\nfunction M8POLIN;\nx = (1:1:360);\n\n% 1. Before enterting the birifringent plate X = 0;\nPhi1 = 0;\ny1 = cos(2*pi*(x/360));\nz1 = cos(2*pi*(x/360) +  (2*pi*Phi1)/360);\n\nfigure(1);\nsubplot(2,2,1);\nplot(x,y1,x,z1);\naxis([0 400 -1 1]);                  % PLOTS LIMITS                    \nxlabel('x');\ntitle('Each seperate');\nlegend('y1(x)','z1(x)');\n\nsubplot(2,2,2);\nplot(y1,z1);\naxis([-1 1 -1 1]);                  % PLOTS LIMITS                    \nxlabel('y1');\ntitle('One plotted against the other');\nlegend('z1(y1)');\n\n% 2. At the plane X = L\nPhi2 = 180;\ny1 = cos(2*pi*(x/360));\nz1 = cos(2*pi*(x/360) +  (2*pi*Phi2)/360);\n\nsubplot(2,2,3);\nplot(x,y1,x,z1);\naxis([0 400 -1 1]);                  % PLOTS LIMITS                    \nxlabel('x');\ntitle('Each seperate');\nlegend('y1(x)','z1(x)');\n\nsubplot(2,2,4);\nplot(y1,z1);\naxis([-1 1 -1 1]);                  % PLOTS LIMITS                    \nxlabel('y1');\ntitle('One plotted against the other');\nlegend('z1(y1)');\n\n% The resulting vibration is along the diagonal",
    "cCode": "",
    "defaultParams": {},
    "displayName": "M8POLIN",
    "tags": [
      "chapter5",
      "matrix-methods",
      "fringe-pattern"
    ],
    "wikipediaLinks": [
      {
        "title": "Ray transfer matrix analysis",
        "url": "https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis"
      },
      {
        "title": "Interference (wave propagation)",
        "url": "https://en.wikipedia.org/wiki/Interference_(wave_propagation)"
      },
      {
        "title": "ABCD matrix",
        "url": "https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis"
      }
    ]
  },
  {
    "id": "M9POELIP",
    "title": "M9POELIP - M9POELIP Circular and ellipticlly polarized light\r",
    "description": "M9POELIP Circular and ellipticlly polarized light\r",
    "category": "Optics - Matrix Methods",
    "chapter": "5",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# M9POELIP Circular and ellipticlly polarized light\n\n# To demonstrate of circular or elliptically polarized light turning \"left or \"right\".\n# Four graphs are shown, extending from 0 to 90, 0 to 160, 0 to 235,\n# and 0 to 315 degrees.\n\n# The angle ranges (x) correspond to chosen time ranges. Left and right\n# polarized light is described by positive or negative ?=?/2 in one component:\n# Positive ?: We have y = Ey = A np.cos(-x), yy = Ez = Acos(-x +?) = -Asin(-x),\n\n# Negative ?: We have y = Ey = A np.cos(-x), yy = Ez = Acos(-x -?) = Asin(-x),\n# We write for Ez = bAsin(x). When looking in direction of the incoming light,\n# \"b = -1\" is for \"left\" polarized light (counter clock wise), \"b= 1\" for \"right\"\n# polarized light (clock wise).\n\n\nx1 = np.arange(1, 90+1, 1)\nx2 = np.arange(1, 160+1, 1)\nx3 = np.arange(1, 235+1, 1)\nx4 = np.arange(1, 315+1, 1)\nb = -1\ny1 = np.cos(-2*np.pi*(x1/360))\ny2 = np.cos(-2*np.pi*(x2/360))\ny3 = np.cos(-2*np.pi*(x3/360))\ny4 = np.cos(-2*np.pi*(x4/360))\nyy1 = b*np.sin(-2*np.pi*(x1/360))\nyy2 = b*np.sin(-2*np.pi*(x2/360))\nyy3 = b*np.sin(-2*np.pi*(x3/360))\nyy4 = b*np.sin(-2*np.pi*(x4/360))\nfig = plt.figure(1)\n\nplt.subplot(2, 2, 1)\n\nplt.plot(y1,yy1)\n\nplt.xlim(-1, 1)\nplt.ylim(-1, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('y1(x1)')\nplt.legend(['yy1(x1)'])\nplt.subplot(2, 2, 2)\n\nplt.plot(y2,yy2)\n\nplt.xlim(-1, 1)\nplt.ylim(-1, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('y2(x2)')\nplt.legend(['yy2(x2)'])\nplt.subplot(2, 2, 3)\n\nplt.plot(y3,yy3)\n\nplt.xlim(-1, 1)\nplt.ylim(-1, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('y3(x3)')\nplt.legend(['yy3(x3)'])\nplt.subplot(2, 2, 4)\n\nplt.plot(y4,yy4)\n\nplt.xlim(-1, 1)\nplt.ylim(-1, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('y4(x4)')\nplt.legend(['yy4(x4)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% M9POELIP Circular and ellipticlly polarized light\n\n% To demonstrate of circular or elliptically polarized light turning \"left or \"right\".\n% Four graphs are shown, extending from 0 to 90, 0 to 160, 0 to 235,\n% and 0 to 315 degrees.\n\n% The angle ranges (x) correspond to chosen time ranges. Left and right\n% polarized light is described by positive or negative ?=?/2 in one component:\n% Positive ?: We have y = Ey = A cos(-x), yy = Ez = Acos(-x +?) = -Asin(-x),\n\n% Negative ?: We have y = Ey = A cos(-x), yy = Ez = Acos(-x -?) = Asin(-x),\n% We write for Ez = bAsin(x). When looking in direction of the incoming light,\n% \"b = -1\" is for \"left\" polarized light (counter clock wise), \"b= 1\" for \"right\"\n% polarized light (clock wise).\n\nfunction M9POELIP;\nx1 = (1:1:90);\nx2 = (1:1:160);\nx3 = (1:1:235);\nx4 = (1:1:315);\nb = -1;\n\ny1 = cos(-2*pi*(x1/360));\ny2 = cos(-2*pi*(x2/360));\ny3 = cos(-2*pi*(x3/360));\ny4 = cos(-2*pi*(x4/360));\n\nyy1 = b*sin(-2*pi*(x1/360));\nyy2 = b*sin(-2*pi*(x2/360));\nyy3 = b*sin(-2*pi*(x3/360));\nyy4 = b*sin(-2*pi*(x4/360));\n\nfigure(1);\nsubplot(2,2,1);\nplot(y1,yy1);\naxis([-1 1 -1 1]);                  % PLOTS LIMITS                    \nxlabel('y1(x1)');\nlegend('yy1(x1)');\n\nsubplot(2,2,2);\nplot(y2,yy2);\naxis([-1 1 -1 1]);                  % PLOTS LIMITS                    \nxlabel('y2(x2)');\nlegend('yy2(x2)');\n\nsubplot(2,2,3);\nplot(y3,yy3);\naxis([-1 1 -1 1]);                  % PLOTS LIMITS                    \nxlabel('y3(x3)');\nlegend('yy3(x3)');\n\n\nsubplot(2,2,4);\nplot(y4,yy4);\naxis([-1 1 -1 1]);                  % PLOTS LIMITS                    \nxlabel('y4(x4)');\nlegend('yy4(x4)');\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "M9POELIP Circular and ellipticlly polarized light",
    "tags": [
      "chapter5",
      "matrix-methods"
    ],
    "wikipediaLinks": [
      {
        "title": "Ray transfer matrix analysis",
        "url": "https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis"
      },
      {
        "title": "ABCD matrix",
        "url": "https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis"
      }
    ]
  },
  {
    "id": "of",
    "title": "of - MA3DIFINTRO\r",
    "description": "MA3DIFINTRO\r",
    "category": "Optics - Matrix Methods",
    "chapter": "5",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# MA3DIFINTRO\n\n# Fresnel's formulas as function of angle of incidence for n2<n1\n# Graph of arg(zr) - arg(zrr).\n\n# Complex zr for parallel and zrr for perpendicular case.\n\nTheta = np.arange(0, 90+1, 1)\nn2 = 1\nn1 = 1.9\nrp = ((n2/n1)*np.cos(2*(np.pi/360)*Theta)-np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/((n2/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))\nrs = (np.cos(2*(np.pi/360)*Theta)-(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))\nfig = plt.figure(1)\n\nplt.plot(Theta,angle(rp)\n-angle(rs))\nplt.xlim(0, 100)\nplt.ylim(-3.5, 3.5)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.legend(['angle(rp(\theta))-angle(rs(\theta))'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% MA3DIFINTRO\n\n% Fresnel's formulas as function of angle of incidence for n2<n1\n% Graph of arg(zr) - arg(zrr).\n\n% Complex zr for parallel and zrr for perpendicular case.\nfunction MA3DIFINTRO;\nTheta = (0:1:90);\nn2 = 1;\nn1 = 1.9;\n\nrp = ((n2/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./((n2/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));\nrs = (cos(2*(pi/360)*Theta)-(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));\n\n\nfigure(1);\nplot(Theta,angle(rp)-angle(rs));\naxis([0 100 -3.5 3.5]);                  % PLOTS LIMITS                    \nxlabel('\theta');\nlegend('angle(rp(\theta))-angle(rs(\theta))');",
    "cCode": "",
    "defaultParams": {},
    "displayName": "MA3DIFINTRO",
    "tags": [
      "chapter5",
      "matrix-methods",
      "3d-visualization"
    ],
    "wikipediaLinks": [
      {
        "title": "Ray transfer matrix analysis",
        "url": "https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis"
      },
      {
        "title": "ABCD matrix",
        "url": "https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis"
      }
    ]
  }
];
